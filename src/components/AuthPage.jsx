import React, { useState } from 'react'
import { useFirebaseStore } from '../firebaseStore'
import { Mail, Lock, User, Ruler, Weight, Cake } from 'lucide-react'

export default function AuthPage() {
  const { register, login, loading, error } = useFirebaseStore()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    height: '',
    weight: '',
    age: ''
  })
  const [localError, setLocalError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLocalError('')

    try {
      if (isLogin) {
        await login(formData.email, formData.password)
      } else {
        if (!formData.name || !formData.height || !formData.weight) {
          setLocalError('Lütfen tüm alanları doldurun')
          return
        }
        await register(
          formData.email,
          formData.password,
          formData.name,
          formData.height,
          formData.weight,
          formData.age
        )
      }
    } catch (err) {
      setLocalError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-4xl">💪</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Bombo</h1>
          <p className="text-gray-400">Advanced Workout Tracker</p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
          </h2>

          {/* Error Message */}
          {(localError || error) && (
            <div className="mb-4 p-4 bg-red-600/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm">{localError || error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Şifre</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Register Fields */}
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Ad Soyad</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-500" size={18} />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Adınız"
                      className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Boy (cm)</label>
                    <div className="relative">
                      <Ruler className="absolute left-2 top-2 text-gray-500" size={16} />
                      <input
                        type="number"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        placeholder="188"
                        className="w-full pl-8 pr-2 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Kilo (kg)</label>
                    <div className="relative">
                      <Weight className="absolute left-2 top-2 text-gray-500" size={16} />
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        placeholder="76"
                        className="w-full pl-8 pr-2 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Yaş</label>
                    <div className="relative">
                      <Cake className="absolute left-2 top-2 text-gray-500" size={16} />
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="Opsiyonel"
                        className="w-full pl-8 pr-2 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-300 mt-6"
            >
              {loading ? 'Yükleniyor...' : isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}{' '}
              <button
                onClick={() => {
                  setIsLogin(!isLogin)
                  setLocalError('')
                  setFormData({ email: '', password: '', name: '', height: '', weight: '', age: '' })
                }}
                className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                {isLogin ? 'Kaydol' : 'Giriş Yap'}
              </button>
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="text-center text-gray-400 text-xs">
          <p>🔒 Verileriniz Firebase ile güvenli şekilde saklanır</p>
        </div>
      </div>
    </div>
  )
}
