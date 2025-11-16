'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Shield, Check, X, Loader2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'

const plans = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 'R$ 0',
    period: '/mês',
    description: 'Perfeito para começar',
    features: [
      { name: 'Gravação local', included: true },
      { name: 'Recorte de vídeos local', included: true },
      { name: 'Auto-exclusão manual', included: true },
      { name: 'Backup em nuvem', included: false },
      { name: 'Auto-exclusão automática', included: false },
      { name: 'Compartilhamento WhatsApp', included: false },
      { name: 'Análise por IA', included: false },
      { name: 'Alertas em tempo real', included: false },
    ],
    cta: 'Começar Grátis',
    popular: false,
  },
  {
    id: 'basic',
    name: 'Básico',
    price: 'R$ 19,90',
    period: '/mês',
    description: 'Ideal para motoristas regulares',
    features: [
      { name: 'Gravação local', included: true },
      { name: 'Recorte de vídeos local', included: true },
      { name: 'Auto-exclusão manual', included: true },
      { name: 'Backup em nuvem', included: true },
      { name: 'Auto-exclusão automática (24h)', included: true },
      { name: 'Compartilhamento WhatsApp', included: true },
      { name: 'Análise por IA', included: false },
      { name: 'Alertas em tempo real', included: false },
    ],
    cta: 'Assinar Básico',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 39,90',
    period: '/mês',
    description: 'Proteção máxima com IA',
    features: [
      { name: 'Gravação local', included: true },
      { name: 'Recorte de vídeos local', included: true },
      { name: 'Auto-exclusão manual', included: true },
      { name: 'Backup em nuvem', included: true },
      { name: 'Auto-exclusão automática (24h)', included: true },
      { name: 'Compartilhamento WhatsApp', included: true },
      { name: 'Análise por IA', included: true },
      { name: 'Alertas em tempo real', included: true },
    ],
    cta: 'Assinar Premium',
    popular: false,
  },
]

export default function PlanosPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  const handleSelectPlan = async (planId: string) => {
    if (planId === 'free') {
      router.push('/cadastro')
      return
    }

    // Verificar se usuário está logado
    if (!user) {
      router.push('/login')
      return
    }

    setLoading(planId)

    try {
      // Criar sessão de checkout no Stripe
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          userId: user.id,
          userEmail: user.email,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('Erro ao criar sessão de checkout')
      }
    } catch (error) {
      console.error('Erro ao processar assinatura:', error)
      alert('Erro ao processar assinatura. Tente novamente.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/20 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Vigilante 24h</span>
            </Link>
            <div className="flex items-center gap-4">
              {user ? (
                <Link href="/dashboard">
                  <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" className="text-gray-300 hover:text-white">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/cadastro">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Cadastrar
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Escolha o Plano Ideal
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proteja suas viagens com a melhor tecnologia de gravação contínua. Comece grátis e faça upgrade quando precisar.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative bg-slate-800/50 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                    : 'border-blue-900/20 hover:border-blue-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-500 line-through'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSelectPlan(plan.id)}
                    disabled={loading !== null}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    {loading === plan.id ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      plan.cta
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Todos os planos incluem 7 dias de garantia de reembolso
            </p>
            <p className="text-gray-500 text-sm">
              Pagamentos processados de forma segura pelo Stripe
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
