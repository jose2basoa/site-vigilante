import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession, PLANS } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { planId, userId, userEmail } = await request.json()

    if (!planId || !userId || !userEmail) {
      return NextResponse.json(
        { error: 'Dados incompletos' },
        { status: 400 }
      )
    }

    if (planId === 'free') {
      return NextResponse.json(
        { error: 'Plano gratuito não requer checkout' },
        { status: 400 }
      )
    }

    // Obter o priceId do plano
    const plan = PLANS[planId as keyof typeof PLANS]
    if (!plan || !plan.priceId) {
      return NextResponse.json(
        { error: 'Plano inválido ou priceId não configurado' },
        { status: 400 }
      )
    }

    // Criar sessão de checkout
    const session = await createCheckoutSession(
      plan.priceId,
      userId,
      userEmail,
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/dashboard?success=true`,
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/planos?canceled=true`
    )

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Erro ao criar checkout:', error)
    return NextResponse.json(
      { error: error.message || 'Erro ao criar sessão de checkout' },
      { status: 500 }
    )
  }
}
