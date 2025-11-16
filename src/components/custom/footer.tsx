import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-900/20 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Vigilante 24h</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sua segurança no trânsito, gravada e protegida 24 horas por dia. 
              Câmeras frontal e traseira trabalhando juntas para sua tranquilidade.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>contato@vigilante24h.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#features" className="hover:text-blue-400 transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/#plans" className="hover:text-blue-400 transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-blue-400 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vigilante 24h. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
