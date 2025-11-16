import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PoliticaDePrivacidadePage() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
          <p className="text-gray-400 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
              <p className="mb-4">
                A privacidade dos nossos usuários é extremamente importante para nós. Esta Política de Privacidade descreve como o Vigilante 24h ("nós", "nosso" ou "Serviço") coleta, usa, armazena e protege suas informações pessoais quando você usa nosso aplicativo e serviços.
              </p>
              <p className="mb-4">
                Ao usar o Vigilante 24h, você concorda com a coleta e uso de informações de acordo com esta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Informações de Cadastro</h3>
              <p className="mb-4">Quando você cria uma conta, coletamos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Senha (armazenada de forma criptografada)</li>
                <li>Foto de perfil (opcional)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Informações de Autenticação Social</h3>
              <p className="mb-4">Se você optar por fazer login com Google ou GitHub, coletamos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome público</li>
                <li>Endereço de e-mail associado à conta</li>
                <li>Foto de perfil pública</li>
                <li>ID único do provedor de autenticação</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Dados de Gravação</h3>
              <p className="mb-4">O aplicativo grava vídeos usando as câmeras do seu dispositivo. Coletamos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Arquivos de vídeo gravados</li>
                <li>Metadados dos vídeos (data, hora, duração, tamanho do arquivo)</li>
                <li>Informações de localização (se você conceder permissão)</li>
                <li>Dados de sensores do dispositivo (acelerômetro, giroscópio)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.4 Informações de Pagamento</h3>
              <p className="mb-4">Para assinaturas pagas, processamos pagamentos através do Stripe. Coletamos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informações de cobrança (processadas pelo Stripe)</li>
                <li>Histórico de transações</li>
                <li>Status da assinatura</li>
              </ul>
              <p className="mb-4 text-yellow-400">
                ⚠️ Importante: Não armazenamos dados completos de cartão de crédito. Todas as informações de pagamento são processadas de forma segura pelo Stripe.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.5 Informações de Uso</h3>
              <p className="mb-4">Coletamos automaticamente:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informações do dispositivo (modelo, sistema operacional, versão do app)</li>
                <li>Logs de uso e atividade no aplicativo</li>
                <li>Dados de desempenho e diagnóstico</li>
                <li>Endereço IP e informações de rede</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos Suas Informações</h2>
              <p className="mb-4">Usamos as informações coletadas para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar suas transações e gerenciar assinaturas</li>
                <li>Enviar notificações importantes sobre sua conta</li>
                <li>Responder a solicitações de suporte</li>
                <li>Detectar, prevenir e resolver problemas técnicos</li>
                <li>Analisar padrões de uso para melhorar a experiência do usuário</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Armazenamento e Segurança de Dados</h2>
              
              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Armazenamento Local</h3>
              <p className="mb-4">
                No plano gratuito, os vídeos são armazenados localmente no seu dispositivo e não são enviados para nossos servidores. Você tem controle total sobre esses arquivos.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Armazenamento em Nuvem</h3>
              <p className="mb-4">
                Nos planos Básico e Premium, os vídeos são armazenados em servidores seguros na nuvem (Supabase Storage). Implementamos medidas de segurança incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Criptografia em trânsito (TLS/SSL)</li>
                <li>Criptografia em repouso</li>
                <li>Controles de acesso rigorosos</li>
                <li>Backups regulares</li>
                <li>Monitoramento de segurança 24/7</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Auto-Exclusão</h3>
              <p className="mb-4">
                Conforme nossa política de retenção, vídeos são automaticamente excluídos após 24 horas, a menos que você os salve manualmente ou faça um recorte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Compartilhamento de Informações</h2>
              <p className="mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Provedores de Serviço:</strong> Stripe (pagamentos), Supabase (banco de dados e armazenamento), Vercel (hospedagem)</li>
                <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou para proteger nossos direitos legais</li>
                <li><strong>Com Seu Consentimento:</strong> Quando você autoriza explicitamente o compartilhamento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos e Controles</h2>
              <p className="mb-4">Você tem os seguintes direitos sobre seus dados:</p>
              
              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Acesso</h3>
                <p className="text-gray-400">Solicitar uma cópia de todos os dados que temos sobre você</p>
              </div>

              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Correção</h3>
                <p className="text-gray-400">Atualizar ou corrigir informações imprecisas através do dashboard</p>
              </div>

              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Exclusão</h3>
                <p className="text-gray-400">Solicitar a exclusão permanente de sua conta e todos os dados associados</p>
              </div>

              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Portabilidade</h3>
                <p className="text-gray-400">Exportar seus dados em formato legível por máquina</p>
              </div>

              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Objeção</h3>
                <p className="text-gray-400">Opor-se ao processamento de seus dados para determinadas finalidades</p>
              </div>

              <p className="mt-4">
                Para exercer qualquer desses direitos, entre em contato conosco através do e-mail: privacidade@vigilante24h.com.br
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies e Tecnologias Similares</h2>
              <p className="mb-4">
                Usamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Manter você conectado à sua conta</li>
                <li>Lembrar suas preferências</li>
                <li>Analisar o uso do aplicativo</li>
                <li>Melhorar a segurança</li>
              </ul>
              <p className="mt-4">
                Você pode controlar o uso de cookies através das configurações do seu navegador ou dispositivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacidade de Menores</h2>
              <p className="mb-4">
                Nosso Serviço não é direcionado a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores. Se você é pai/mãe ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Transferências Internacionais</h2>
              <p className="mb-4">
                Seus dados podem ser transferidos e mantidos em servidores localizados fora do seu país de residência. Ao usar nosso Serviço, você consente com essa transferência. Garantimos que todas as transferências cumpram as leis de proteção de dados aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nesta Política</h2>
              <p className="mb-4">
                Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas por e-mail ou através de um aviso no aplicativo. Recomendamos revisar esta página regularmente para se manter informado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Lei Geral de Proteção de Dados (LGPD)</h2>
              <p className="mb-4">
                Estamos comprometidos em cumprir a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018). Processamos seus dados pessoais com base legal adequada e respeitamos todos os seus direitos como titular de dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contato</h2>
              <p className="mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato:
              </p>
              <div className="bg-slate-900/50 border border-blue-900/20 rounded-lg p-6">
                <p className="text-gray-400 mb-2"><strong className="text-white">Email:</strong> privacidade@vigilante24h.com.br</p>
                <p className="text-gray-400 mb-2"><strong className="text-white">Suporte:</strong> suporte@vigilante24h.com.br</p>
                <p className="text-gray-400"><strong className="text-white">Telefone:</strong> (11) 9999-9999</p>
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
