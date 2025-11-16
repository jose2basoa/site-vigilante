import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const headersList = await headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Assinatura do webhook ausente' },
        { status: 400 }
      )
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error('❌ Erro ao verificar webhook:', err.message)
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      )
    }

    const supabase = supabaseAdmin()

    // Processar eventos do Stripe
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId || session.client_reference_id

        if (!userId) {
          console.error('❌ userId não encontrado no webhook')
          break
        }

        // Obter informações da assinatura
        const subscriptionId = session.subscription as string
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)
        const priceId = subscription.items.data[0].price.id

        // Determinar o plano baseado no priceId
        let plan: 'free' | 'basic' | 'premium' = 'free'
        if (priceId === process.env.STRIPE_PRICE_BASIC) {
          plan = 'basic'
        } else if (priceId === process.env.STRIPE_PRICE_PREMIUM) {
          plan = 'premium'
        }

        // Atualizar perfil do usuário no Supabase
        const { error } = await supabase
          .from('profiles')
          .update({
            plan,
            subscription_id: subscriptionId,
            stripe_customer_id: session.customer as string,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('❌ Erro ao atualizar perfil:', error)
        } else {
          console.log(`✅ Usuário ${userId} atualizado para plano ${plan}`)
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        if (!userId) {
          console.error('❌ userId não encontrado no webhook')
          break
        }

        const priceId = subscription.items.data[0].price.id
        let plan: 'free' | 'basic' | 'premium' = 'free'

        if (priceId === process.env.STRIPE_PRICE_BASIC) {
          plan = 'basic'
        } else if (priceId === process.env.STRIPE_PRICE_PREMIUM) {
          plan = 'premium'
        }

        // Atualizar plano
        const { error } = await supabase
          .from('profiles')
          .update({
            plan,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('❌ Erro ao atualizar perfil:', error)
        } else {
          console.log(`✅ Assinatura do usuário ${userId} atualizada para ${plan}`)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const userId = subscription.metadata?.userId

        if (!userId) {
          console.error('❌ userId não encontrado no webhook')
          break
        }

        // Retornar para plano gratuito
        const { error } = await supabase
          .from('profiles')
          .update({
            plan: 'free',
            subscription_id: null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)

        if (error) {
          console.error('❌ Erro ao atualizar perfil:', error)
        } else {
          console.log(`✅ Usuário ${userId} retornou para plano gratuito`)
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const subscriptionId = invoice.subscription as string

        if (subscriptionId) {
          // Buscar usuário pela subscription_id
          const { data: profile } = await supabase
            .from('profiles')
            .select('id, email')
            .eq('subscription_id', subscriptionId)
            .single()

          if (profile) {
            console.log(`⚠️ Pagamento falhou para usuário ${profile.email}`)
            // Aqui você pode enviar um email notificando o usuário
          }
        }
        break
      }

      default:
        console.log(`ℹ️ Evento não tratado: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error: any) {
    console.error('❌ Erro no webhook:', error)
    return NextResponse.json(
      { error: error.message || 'Erro ao processar webhook' },
      { status: 500 }
    )
  }
}
