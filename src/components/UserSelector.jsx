import React, { useState } from 'react'
import { useStore } from '../store'
import { Plus, Users } from 'lucide-react'

export default function UserSelector({ onUserSelect }) {
  const { users, addUser } = useStore()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    age: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.height && formData.weight) {
      addUser({
        name: formData.name,
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        age: parseInt(formData.age) || null
      })
      setFormData({ name: '', height: '', weight: '', age: '' })
      setShowForm(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-4xl">💪</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Workout Tracker Pro</h1>
          <p className="text-gray-400">Advanced Training Program Management</p>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => onUserSelect(user.id)}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 text-left group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded">Active</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{user.name}</h3>
              <div className="space-y-1 text-sm text-gray-400">
                <p>📏 Height: {user.height} cm</p>
                <p>⚖️ Weight: {user.weight} kg</p>
                {user.age && <p>🎂 Age: {user.age}</p>}
              </div>
            </button>
          ))}

          {/* Add New User Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-dashed border-orange-500/50 rounded-xl hover:border-orange-500 hover:bg-gray-800/70 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
          >
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
              <Plus className="text-orange-400 group-hover:text-orange-300" size={24} />
            </div>
            <span className="text-white font-semibold">Add New User</span>
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="188"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    placeholder="76"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="Optional"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Create Profile
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
