import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string | undefined

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  return res.redirect('/dashboard') // ou onde quiser
}
