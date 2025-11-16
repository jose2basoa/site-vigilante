import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TermosDeUsoPage() {
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
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-slate-800/50 border border-blue-900/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Termos de Uso</h1>
          <p className="text-gray-400 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Ao acessar e usar o aplicativo Vigilante 24h ("Serviço"), você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso Serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
              <p className="mb-4">
                O Vigilante 24h é um aplicativo de gravação de vídeo contínua desenvolvido para motoristas, utilizando as câmeras frontal e traseira do dispositivo móvel. O Serviço oferece:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gravação contínua de vídeo 24 horas por dia</li>
                <li>Armazenamento local com auto-exclusão após 24 horas (plano gratuito)</li>
                <li>Backup em nuvem (planos pagos)</li>
                <li>Funcionalidade de recorte de vídeo</li>
                <li>Compartilhamento de gravações (planos pagos)</li>
                <li>Análise por IA e alertas em tempo real (plano premium)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Cadastro e Conta</h2>
              <p className="mb-4">
                Para usar determinadas funcionalidades do Serviço, você deve criar uma conta fornecendo informações precisas, completas e atualizadas. Você é responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Planos e Pagamentos</h2>
              <p className="mb-4">
                O Vigilante 24h oferece três planos de serviço:
              </p>
              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">Plano Gratuito</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>Gravação local</li>
                  <li>Auto-exclusão manual</li>
                  <li>Recorte local de vídeos</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">Plano Básico - R$ 19,90/mês</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>Backup em nuvem</li>
                  <li>Auto-exclusão automática após 24h</li>
                  <li>Compartilhamento via WhatsApp</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-white mb-3">Plano Premium - R$ 39,90/mês</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-gray-400">
                  <li>Todos os recursos do Básico</li>
                  <li>Análise por IA</li>
                  <li>Alertas em tempo real</li>
                  <li>Suporte prioritário</li>
                </ul>
              </div>
              <p className="mb-4">
                Os pagamentos são processados através do Stripe. Ao assinar um plano pago, você autoriza cobranças recorrentes mensais até o cancelamento da assinatura.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cancelamento e Reembolso</h2>
              <p className="mb-4">
                Você pode cancelar sua assinatura a qualquer momento através do dashboard. O cancelamento será efetivo ao final do período de cobrança atual. Não oferecemos reembolsos proporcionais para cancelamentos no meio do ciclo de cobrança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Uso Aceitável</h2>
              <p className="mb-4">
                Você concorda em usar o Serviço apenas para fins legais e de acordo com estes Termos. É proibido:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usar o Serviço para gravar pessoas sem consentimento quando legalmente exigido</li>
                <li>Violar leis de privacidade ou direitos de terceiros</li>
                <li>Usar o Serviço para atividades ilegais ou fraudulentas</li>
                <li>Tentar hackear, descompilar ou fazer engenharia reversa do aplicativo</li>
                <li>Compartilhar sua conta com terceiros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Propriedade Intelectual</h2>
              <p className="mb-4">
                O Serviço e seu conteúdo original, recursos e funcionalidades são de propriedade exclusiva do Vigilante 24h e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
              <p className="mb-4">
                Você mantém todos os direitos sobre os vídeos que grava usando nosso Serviço. Ao usar nossos serviços de backup em nuvem, você nos concede uma licença limitada para armazenar e processar seus vídeos conforme necessário para fornecer o Serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                O Vigilante 24h é fornecido "como está" e "conforme disponível". Não garantimos que o Serviço será ininterrupto, seguro ou livre de erros. Em nenhuma circunstância seremos responsáveis por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Perda de dados ou gravações</li>
                <li>Falhas técnicas ou interrupções do serviço</li>
                <li>Danos indiretos, incidentais ou consequenciais</li>
                <li>Uso indevido do Serviço por terceiros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Modificações dos Termos</h2>
              <p className="mb-4">
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos você sobre mudanças significativas por e-mail ou através de um aviso no aplicativo. O uso continuado do Serviço após as alterações constitui aceitação dos novos Termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Lei Aplicável</h2>
              <p className="mb-4">
                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar conflitos de disposições legais. Qualquer disputa relacionada a estes Termos será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre estes Termos, entre em contato conosco:
              </p>
              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6">
                <p className="text-gray-400">Email: suporte@vigilante24h.com.br</p>
                <p className="text-gray-400">Telefone: (11) 9999-9999</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-900/20">
            <Link href="/cadastro">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Aceitar e Criar Conta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
