import React, { useState, useEffect } from 'react'
import { useFirebaseStore } from '../firebaseStore'
import { Edit2, Save, X } from 'lucide-react'

export default function UserProfile({ user }) {
  const { updateUserStats, fetchUserData } = useFirebaseStore()
  const [userData, setUserData] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [stats, setStats] = useState({
    height: '',
    weight: '',
    age: ''
  })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (user?.uid) {
      fetchUserData(user.uid).then((data) => {
        if (data) {
          setUserData(data)
          setStats({
            height: data.height || '',
            weight: data.weight || '',
            age: data.age || ''
          })
        }
      })
    }
  }, [user?.uid, fetchUserData])

  const handleSave = async () => {
    try {
      setSaving(true)
      await updateUserStats(user.uid, stats)
      setIsEditing(false)
    } catch (error) {
      console.error('Error saving stats:', error)
    } finally {
      setSaving(false)
    }
  }

  const bmi = userData && userData.weight && userData.height ? (userData.weight / ((userData.height / 100) ** 2)).toFixed(1) : 0

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl p-6 sticky top-24">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {userData?.name ? userData.name.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || '?'}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">{userData?.name || user?.email}</h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
      </div>

      {/* Stats */}
      {!isEditing ? (
        <div className="space-y-4 mb-6">
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Boy</p>
            <p className="text-2xl font-bold text-orange-400">{userData?.height || '-'} cm</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Kilo</p>
            <p className="text-2xl font-bold text-orange-400">{userData?.weight || '-'} kg</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">BMI</p>
            <p className="text-2xl font-bold text-orange-400">{bmi}</p>
          </div>
          {userData?.age && (
            <div className="bg-gray-700/50 rounded-lg p-4">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Yaş</p>
              <p className="text-2xl font-bold text-orange-400">{userData.age}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wide">Boy (cm)</label>
            <input
              type="number"
              value={stats.height}
              onChange={(e) => setStats({ ...stats, height: parseInt(e.target.value) })}
              className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wide">Kilo (kg)</label>
            <input
              type="number"
              value={stats.weight}
              onChange={(e) => setStats({ ...stats, weight: parseInt(e.target.value) })}
              className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 uppercase tracking-wide">Yaş</label>
            <input
              type="number"
              value={stats.age}
              onChange={(e) => setStats({ ...stats, age: parseInt(e.target.value) })}
              className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-2">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 rounded-lg transition-colors font-medium"
          >
            <Edit2 size={18} />
            İstatistikleri Düzenle
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg transition-colors font-medium disabled:opacity-50"
            >
              <Save size={18} />
              {saving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors font-medium"
            >
              <X size={18} />
              İptal
            </button>
          </>
        )}
      </div>
    </div>
  )
}
