import Link from 'next/link'
import { Shield, Camera, Cloud, Scissors, Clock, Lock, Smartphone, Share2, CheckCircle2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navbar from '@/components/custom/navbar'
import Footer from '@/components/custom/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Proteção 24 horas por dia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sua Segurança no Trânsito,
            <br />
            <span className="text-blue-500">Gravada e Protegida</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Grave automaticamente tudo que acontece no trânsito com câmeras frontal e traseira. 
            Proteja-se contra fraudes de seguro e tenha provas em caso de acidentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/cadastro">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8">
                Começar Grátis
              </Button>
            </Link>
            <Link href="#plans">
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-lg px-8">
                Ver Planos
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">24h</div>
              <div className="text-gray-400">Gravação Contínua</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">2 Câmeras</div>
              <div className="text-gray-400">Frontal e Traseira</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
              <div className="text-gray-400">Proteção Legal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recursos Poderosos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tudo que você precisa para estar protegido no trânsito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Camera className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Dupla Câmera</CardTitle>
                <CardDescription className="text-gray-400">
                  Grave simultaneamente com câmera frontal e traseira do seu celular
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Auto-Delete 24h</CardTitle>
                <CardDescription className="text-gray-400">
                  Gravações antigas são deletadas automaticamente após 24 horas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Scissors className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Corte de Vídeos</CardTitle>
                <CardDescription className="text-gray-400">
                  Faça crops dos momentos importantes e salve apenas o necessário
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Cloud className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Backup na Nuvem</CardTitle>
                <CardDescription className="text-gray-400">
                  Sincronize suas gravações importantes na nuvem (planos pagos)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Lock className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Segurança Total</CardTitle>
                <CardDescription className="text-gray-400">
                  Suas gravações são criptografadas e protegidas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Share2 className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Compartilhamento</CardTitle>
                <CardDescription className="text-gray-400">
                  Envie vídeos direto para WhatsApp, email ou seguradora
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Gerenciamento Remoto</CardTitle>
                <CardDescription className="text-gray-400">
                  Acesse e gerencie suas gravações de qualquer lugar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-blue-900/20 hover:border-blue-500/50 transition-all">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-white">Proteção Legal</CardTitle>
                <CardDescription className="text-gray-400">
                  Provas irrefutáveis em caso de acidentes ou fraudes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comece grátis e faça upgrade quando precisar de mais recursos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Grátis */}
            <Card className="bg-slate-800/50 border-blue-900/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Grátis</CardTitle>
                <div className="text-4xl font-bold text-white mt-4">
                  R$ 0
                  <span className="text-lg text-gray-400 font-normal">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Gravação local ilimitada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Câmeras frontal e traseira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Corte de vídeos local</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">Auto-delete automático</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">Backup na nuvem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">Compartilhamento direto</span>
                  </li>
                </ul>
                <Link href="/cadastro">
                  <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">
                    Começar Grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Básico */}
            <Card className="bg-slate-800/50 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <CardHeader>
                <CardTitle className="text-white text-2xl">Básico</CardTitle>
                <div className="text-4xl font-bold text-white mt-4">
                  R$ 19,90
                  <span className="text-lg text-gray-400 font-normal">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Tudo do plano Grátis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Auto-delete automático 24h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Backup na nuvem (50GB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Compartilhamento WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Gerenciamento web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">Suporte prioritário</span>
                  </li>
                </ul>
                <Link href="/cadastro">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Assinar Básico
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Plano Premium */}
            <Card className="bg-slate-800/50 border-blue-900/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Premium</CardTitle>
                <div className="text-4xl font-bold text-white mt-4">
                  R$ 39,90
                  <span className="text-lg text-gray-400 font-normal">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Tudo do plano Básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Backup ilimitado na nuvem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Compartilhamento ilimitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Suporte prioritário 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Análise de IA (em breve)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Alertas em tempo real</span>
                  </li>
                </ul>
                <Link href="/cadastro">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Assinar Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Baixe o App Agora
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Disponível para Android e iOS. Comece a proteger suas viagens hoje mesmo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* QR Code Play Store */}
              <Card className="bg-slate-800/50 border-blue-900/20 p-8">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">QR Code</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">Google Play Store</h3>
                  <p className="text-gray-400 text-sm mb-4">Escaneie para baixar no Android</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Baixar para Android
                  </Button>
                </div>
              </Card>

              {/* QR Code Apple Store */}
              <Card className="bg-slate-800/50 border-blue-900/20 p-8">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-white rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-40 h-40 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                        <span className="text-gray-500 text-xs">QR Code</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">Apple App Store</h3>
                  <p className="text-gray-400 text-sm mb-4">Escaneie para baixar no iOS</p>
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                    Baixar para iOS
                  </Button>
                </div>
              </Card>
            </div>

            <p className="text-gray-500 text-sm">
              * Os QR codes serão ativados assim que o app estiver disponível nas lojas
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para Dirigir com Segurança?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de motoristas que já protegem suas viagens com o Vigilante 24h
              </p>
              <Link href="/cadastro">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Criar Conta Grátis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
