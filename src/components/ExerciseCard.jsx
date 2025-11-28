import React, { useState } from 'react'
import RestTimer from './RestTimer'
import { Clock, CheckCircle } from 'lucide-react'

export default function ExerciseCard({ exercise, index }) {
  const [completed, setCompleted] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [currentSet, setCurrentSet] = useState(1)

  const handleSetComplete = () => {
    if (currentSet < exercise.sets) {
      setCurrentSet(currentSet + 1)
      setShowTimer(true)
    } else {
      setCompleted(true)
      setShowTimer(false)
    }
  }

  const handleTimerComplete = () => {
    setShowTimer(false)
  }

  return (
    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 border rounded-xl p-6 transition-all duration-300 ${
      completed
        ? 'border-green-500/50 shadow-lg shadow-green-500/20'
        : 'border-orange-500/30 hover:border-orange-500/60'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-bold text-orange-400 bg-orange-500/20 px-3 py-1 rounded-full">
              #{index + 1}
            </span>
            {completed && (
              <CheckCircle className="text-green-400" size={20} />
            )}
          </div>
          <h3 className="text-xl font-bold text-white">{exercise.name}</h3>
        </div>
      </div>

      {/* Exercise Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-gray-700/50 rounded-lg p-3">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Sets</p>
          <p className="text-2xl font-bold text-orange-400">{exercise.sets}</p>
        </div>
        <div className="bg-gray-700/50 rounded-lg p-3">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Reps</p>
          <p className="text-2xl font-bold text-orange-400">{exercise.reps}</p>
        </div>
        {exercise.rir && (
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">RIR</p>
            <p className="text-2xl font-bold text-orange-400">{exercise.rir}</p>
          </div>
        )}
        {exercise.failure && (
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Failure</p>
            <p className="text-sm font-bold text-red-400">{exercise.failure}</p>
          </div>
        )}
      </div>

      {/* Set Progress */}
      {!completed && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-gray-300">Set Progress</p>
            <p className="text-sm font-bold text-orange-400">{currentSet}/{exercise.sets}</p>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentSet / exercise.sets) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Timer */}
      {showTimer && (
        <div className="mb-6">
          <RestTimer onComplete={handleTimerComplete} />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!completed ? (
          <>
            <button
              onClick={handleSetComplete}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CheckCircle size={18} />
              {currentSet === exercise.sets ? 'Complete Exercise' : `Set ${currentSet} Done`}
            </button>
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <Clock size={18} />
              Rest
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setCompleted(false)
              setCurrentSet(1)
            }}
            className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-lg transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
