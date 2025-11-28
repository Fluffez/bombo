import React, { useState } from 'react'
import { useFirebaseStore } from '../firebaseStore'
import ExerciseCard from './ExerciseCard'
import { Dumbbell, Plus } from 'lucide-react'

export default function WorkoutDay({ day, exercises, user }) {
  const { updateUserProgram } = useFirebaseStore()
  const [showAddExercise, setShowAddExercise] = useState(false)
  const [newExercise, setNewExercise] = useState({
    name: '',
    sets: 4,
    reps: '8-10',
    rir: '',
    failure: ''
  })
  const [saving, setSaving] = useState(false)

  const handleAddExercise = async () => {
    if (newExercise.name.trim()) {
      try {
        setSaving(true)
        const updatedProgram = { ...user.program }
        updatedProgram[day] = [...(updatedProgram[day] || []), newExercise]
        await updateUserProgram(user.uid, updatedProgram)
        setNewExercise({ name: '', sets: 4, reps: '8-10', rir: '', failure: '' })
        setShowAddExercise(false)
      } catch (error) {
        console.error('Error adding exercise:', error)
      } finally {
        setSaving(false)
      }
    }
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <Dumbbell className="text-white" size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{day} Workout</h2>
            <p className="text-sm text-gray-400">{exercises.length} exercises</p>
          </div>
        </div>
      </div>

      {/* Exercises List */}
      <div className="space-y-3">
        {exercises.length > 0 ? (
          exercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} index={idx} />
          ))
        ) : (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-dashed border-gray-600 rounded-xl p-8 text-center">
            <p className="text-gray-400">No exercises scheduled for {day}</p>
          </div>
        )}
      </div>

      {/* Add Exercise Button */}
      <button
        onClick={() => setShowAddExercise(!showAddExercise)}
        disabled={saving}
        className="w-full py-3 px-4 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/30 text-orange-400 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Plus size={20} />
        Egzersiz Ekle
      </button>

      {/* Add Exercise Form */}
      {showAddExercise && (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Add New Exercise</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Exercise Name</label>
              <input
                type="text"
                value={newExercise.name}
                onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
                placeholder="e.g., Bench Press"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sets</label>
                <input
                  type="number"
                  value={newExercise.sets}
                  onChange={(e) => setNewExercise({ ...newExercise, sets: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Reps</label>
                <input
                  type="text"
                  value={newExercise.reps}
                  onChange={(e) => setNewExercise({ ...newExercise, reps: e.target.value })}
                  placeholder="8-10"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">RIR</label>
                <input
                  type="text"
                  value={newExercise.rir}
                  onChange={(e) => setNewExercise({ ...newExercise, rir: e.target.value })}
                  placeholder="1-2"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Failure Type</label>
                <input
                  type="text"
                  value={newExercise.failure}
                  onChange={(e) => setNewExercise({ ...newExercise, failure: e.target.value })}
                  placeholder="Failure"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAddExercise}
                disabled={saving}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
              >
                {saving ? 'Kaydediliyor...' : 'Egzersiz Ekle'}
              </button>
              <button
                onClick={() => setShowAddExercise(false)}
                className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
