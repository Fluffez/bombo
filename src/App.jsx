import React, { useEffect } from 'react'
import { useFirebaseStore } from './firebaseStore'
import AuthPage from './components/AuthPage'
import UserProfile from './components/UserProfile'
import WorkoutView from './components/WorkoutView'
import { LogOut, Settings } from 'lucide-react'

const translations = {
  tr: {
    logout: 'Çıkış',
    settings: 'Ayarlar',
    language: 'Dil',
    turkish: 'Türkçe',
    english: 'English',
    loading: 'Yükleniyor...'
  },
  en: {
    logout: 'Logout',
    settings: 'Settings',
    language: 'Language',
    turkish: 'Türkçe',
    english: 'English',
    loading: 'Loading...'
  }
}

export default function App() {
  const { currentUser, loading, logout, initAuthListener, language, setLanguage } = useFirebaseStore()
  const [showSettings, setShowSettings] = React.useState(false)
  const t = translations[language]

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
          <p className="text-white text-lg">{t.loading}</p>
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
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="flex gap-1 bg-gray-700/50 rounded-lg p-1">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'tr'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                🇹🇷 TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>
            
            {/* Settings Button */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-lg transition-colors"
            >
              <Settings size={18} />
            </button>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              {t.logout}
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t border-orange-500/20 bg-black/30 px-4 py-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-white font-semibold mb-3">{t.settings}</h3>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">{t.language}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      language === 'tr'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {t.turkish}
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      language === 'en'
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {t.english}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
