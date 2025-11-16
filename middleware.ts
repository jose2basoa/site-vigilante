import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  // Obter token de autenticação dos cookies
  const token = request.cookies.get('sb-access-token')?.value

  if (!token) {
    // Redirecionar para login se não estiver autenticado
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    // Verificar se o usuário está autenticado
    const { data: { user }, error } = await supabase.auth.getUser(token)

    if (error || !user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Obter perfil do usuário para verificar o plano
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', user.id)
      .single()

    const userPlan = profile?.plan || 'free'
    const pathname = request.nextUrl.pathname

    // Verificar permissões baseadas no plano
    if (pathname.startsWith('/backup-cloud') && userPlan === 'free') {
      return NextResponse.redirect(new URL('/planos?upgrade=basic', request.url))
    }

    if (pathname.startsWith('/ia-analysis') && userPlan !== 'premium') {
      return NextResponse.redirect(new URL('/planos?upgrade=premium', request.url))
    }

    return NextResponse.next()
  } catch (error) {
    console.error('Erro no middleware:', error)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/backup-cloud/:path*',
    '/ia-analysis/:path*',
  ],
}
