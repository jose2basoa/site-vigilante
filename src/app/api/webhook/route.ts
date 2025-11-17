import type { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'
import { supabaseAdmin } from '../../../lib/supabase'

export const config = {
  api: { bodyParser: false },
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Método não permitido')

  const signature = req.headers['stripe-signature']
  if (!signature) return res.status(400).send('Assinatura ausente')

  let event
  const buf = await buffer(req)

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Erro no webhook:', err)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  const supabase = supabaseAdmin()

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId

      if (!userId) break

      const subscriptionId = session.subscription as string
      const subscription = await stripe.subscriptions.retrieve(subscriptionId)
      const priceId = subscription.items.data[0].price.id

      let plan: 'free' | 'basic' | 'premium' = 'free'
      if (priceId === process.env.STRIPE_PRICE_BASIC) plan = 'basic'
      if (priceId === process.env.STRIPE_PRICE_PREMIUM) plan = 'premium'

      await supabase
        .from('profiles')
        .update({
          plan,
          subscription_id: subscriptionId,
          stripe_customer_id: session.customer as string,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId)

      break
    }

    case 'customer.subscription.deleted': {
      const subs = event.data.object as Stripe.Subscription
      const userId = subs.metadata?.userId
      if (!userId) break

      await supabase
        .from('profiles')
        .update({
          plan: 'free',
          subscription_id: null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId)

      break
    }
  }

  res.json({ received: true })
}
