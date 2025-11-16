import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY não está definida nas variáveis de ambiente')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

// Configuração dos produtos e preços
export const PLANS = {
  free: {
    name: 'Gratuito',
    price: 0,
    priceId: null,
    features: [
      'Gravação local',
      'Recorte de vídeos local',
      'Auto-exclusão manual',
    ],
  },
  basic: {
    name: 'Básico',
    price: 1990, // em centavos (R$ 19,90)
    priceId: process.env.STRIPE_PRICE_BASIC,
    features: [
      'Backup em nuvem',
      'Auto-exclusão automática (24h)',
      'Compartilhamento WhatsApp',
      'Suporte por email',
    ],
  },
  premium: {
    name: 'Premium',
    price: 3990, // em centavos (R$ 39,90)
    priceId: process.env.STRIPE_PRICE_PREMIUM,
    features: [
      'Todos os recursos do Básico',
      'Análise por IA',
      'Alertas em tempo real',
      'Suporte prioritário',
      'Armazenamento ilimitado',
    ],
  },
}

// Função para criar ou obter produtos no Stripe
export async function ensureStripeProducts() {
  try {
    // Verificar se os produtos já existem
    const products = await stripe.products.list({ limit: 10 })
    
    const basicProduct = products.data.find(p => p.metadata.plan === 'basic')
    const premiumProduct = products.data.find(p => p.metadata.plan === 'premium')

    let basicPriceId = PLANS.basic.priceId
    let premiumPriceId = PLANS.premium.priceId

    // Criar produto Básico se não existir
    if (!basicProduct) {
      const newBasicProduct = await stripe.products.create({
        name: 'Vigilante 24h - Básico',
        description: 'Plano Básico com backup em nuvem e auto-exclusão automática',
        metadata: { plan: 'basic' },
      })

      const basicPrice = await stripe.prices.create({
        product: newBasicProduct.id,
        unit_amount: PLANS.basic.price,
        currency: 'brl',
        recurring: { interval: 'month' },
        metadata: { plan: 'basic' },
      })

      basicPriceId = basicPrice.id
      console.log('✅ Produto Básico criado:', basicPriceId)
    }

    // Criar produto Premium se não existir
    if (!premiumProduct) {
      const newPremiumProduct = await stripe.products.create({
        name: 'Vigilante 24h - Premium',
        description: 'Plano Premium com IA, alertas em tempo real e suporte prioritário',
        metadata: { plan: 'premium' },
      })

      const premiumPrice = await stripe.prices.create({
        product: newPremiumProduct.id,
        unit_amount: PLANS.premium.price,
        currency: 'brl',
        recurring: { interval: 'month' },
        metadata: { plan: 'premium' },
      })

      premiumPriceId = premiumPrice.id
      console.log('✅ Produto Premium criado:', premiumPriceId)
    }

    return {
      basicPriceId,
      premiumPriceId,
    }
  } catch (error) {
    console.error('❌ Erro ao criar produtos no Stripe:', error)
    throw error
  }
}

// Função para criar sessão de checkout
export async function createCheckoutSession(
  priceId: string,
  userId: string,
  userEmail: string,
  successUrl: string,
  cancelUrl: string
) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: userEmail,
      client_reference_id: userId,
      metadata: {
        userId,
      },
      subscription_data: {
        metadata: {
          userId,
        },
      },
    })

    return session
  } catch (error) {
    console.error('❌ Erro ao criar sessão de checkout:', error)
    throw error
  }
}

// Função para cancelar assinatura
export async function cancelSubscription(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.cancel(subscriptionId)
    return subscription
  } catch (error) {
    console.error('❌ Erro ao cancelar assinatura:', error)
    throw error
  }
}

// Função para obter informações da assinatura
export async function getSubscription(subscriptionId: string) {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    return subscription
  } catch (error) {
    console.error('❌ Erro ao obter assinatura:', error)
    throw error
  }
}

// Função para criar portal do cliente
export async function createCustomerPortalSession(
  customerId: string,
  returnUrl: string
) {
  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    })

    return session
  } catch (error) {
    console.error('❌ Erro ao criar portal do cliente:', error)
    throw error
  }
}
