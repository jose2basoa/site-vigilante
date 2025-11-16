import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente com service role para operações admin (apenas server-side)
export const supabaseAdmin = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY não está definida')
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// Tipos para o banco de dados
export type Profile = {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  plan: 'free' | 'basic' | 'premium'
  subscription_id: string | null
  stripe_customer_id: string | null
  created_at: string
  updated_at: string
}

export type Recording = {
  id: string
  user_id: string
  title: string
  description: string | null
  file_url: string
  thumbnail_url: string | null
  duration: number | null
  file_size: number | null
  camera_type: 'front' | 'back' | 'both' | null
  recorded_at: string
  created_at: string
  auto_delete_at: string | null
  is_cropped: boolean
  parent_recording_id: string | null
}
