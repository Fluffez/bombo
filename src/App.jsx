import React, { useEffect } from 'react'
import { useFirebaseStore } from './firebaseStore'
import AuthPage from './components/AuthPage'
import UserProfile from './components/UserProfile'
import WorkoutView from './components/WorkoutView'
import { LogOut } from 'lucide-react'

export default function App() {
  const { currentUser, loading, logout, initAuthListener } = useFirebaseStore()

  useEffect(() => {
    initAuthListener()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">💪</span>
          </div>
          <p className="text-white text-lg">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (!currentUser) {
    return <AuthPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-orange-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">💪</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Bombo</h1>
              <p className="text-xs text-gray-400">Advanced Workout Tracker</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Çıkış
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <UserProfile user={currentUser} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <WorkoutView user={currentUser} />
          </div>
        </div>
      </main>
    </div>
  )
}
