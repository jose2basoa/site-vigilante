'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Video, Cloud, HardDrive, Clock, LogOut, User, Settings, Upload, Download, Trash2, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase, type Profile, type Recording } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [recordings, setRecordings] = useState<Recording[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }

      // Buscar perfil
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (profileData) {
        setProfile(profileData)
      }

      // Buscar gravações
      const { data: recordingsData } = await supabase
        .from('recordings')
        .select('*')
        .eq('user_id', user.id)
        .order('recorded_at', { ascending: false })

      if (recordingsData) {
        setRecordings(recordingsData)
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const getPlanBadge = (plan: string) => {
    const badges = {
      free: { label: 'Grátis', color: 'bg-gray-500' },
      basic: { label: 'Básico', color: 'bg-blue-500' },
      premium: { label: 'Premium', color: 'bg-purple-500' },
    }
    return badges[plan as keyof typeof badges] || badges.free
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  const planBadge = getPlanBadge(profile?.plan_type || 'free')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-blue-900/20 bg-slate-950/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Vigilante 24h</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-white font-medium">{profile?.full_name || profile?.email}</div>
                <div className="text-sm text-gray-400">
                  Plano: <span className={`${planBadge.color} text-white px-2 py-0.5 rounded-full text-xs`}>
                    {planBadge.label}
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-blue-900/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total de Gravações</CardTitle>
              <Video className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{recordings.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-blue-900/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Armazenamento</CardTitle>
              <HardDrive className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {profile?.plan_type === 'free' ? 'Local' : '50GB'}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-blue-900/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Backup Nuvem</CardTitle>
              <Cloud className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {profile?.plan_type === 'free' ? 'Indisponível' : 'Ativo'}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-blue-900/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Auto-Delete</CardTitle>
              <Clock className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {profile?.plan_type === 'free' ? 'Manual' : '24h'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upgrade Banner (se plano grátis) */}
        {profile?.plan_type === 'free' && (
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 border-none mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Desbloqueie Recursos Premium
                  </h3>
                  <p className="text-blue-100">
                    Backup na nuvem, auto-delete automático, compartilhamento e muito mais!
                  </p>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">
                  Fazer Upgrade
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recordings List */}
        <Card className="bg-slate-800/50 border-blue-900/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Minhas Gravações</CardTitle>
                <CardDescription className="text-gray-400">
                  Gerencie suas gravações de forma fácil e rápida
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {recordings.length === 0 ? (
              <div className="text-center py-12">
                <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Nenhuma gravação ainda
                </h3>
                <p className="text-gray-400 mb-6">
                  Baixe o app e comece a gravar suas viagens
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Baixar App
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {recordings.map((recording) => (
                  <div
                    key={recording.id}
                    className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-blue-900/20 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{recording.title}</h4>
                        <p className="text-sm text-gray-400">
                          {new Date(recording.recorded_at).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
