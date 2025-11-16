'use client'

import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Vigilante 24h</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-gray-300 hover:text-blue-400 transition-colors">
              Recursos
            </Link>
            <Link href="/#plans" className="text-gray-300 hover:text-blue-400 transition-colors">
              Planos
            </Link>
            <Link href="/#download" className="text-gray-300 hover:text-blue-400 transition-colors">
              Download
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Começar Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-900/20">
            <div className="flex flex-col gap-4">
              <Link 
                href="/#features" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link 
                href="/#plans" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </Link>
              <Link 
                href="/#download" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  Entrar
                </Button>
              </Link>
              <Link href="/cadastro" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Começar Grátis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
