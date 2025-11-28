import React, { useState } from 'react'
import { useStore } from '../store'
import WorkoutDay from './WorkoutDay'
import { Calendar } from 'lucide-react'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function WorkoutView({ user }) {
  const [selectedDay, setSelectedDay] = useState('Monday')

  if (!user?.program) {
    return (
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl p-8 text-center">
        <p className="text-gray-400">No program available</p>
      </div>
    )
  }

  const todayExercises = user.program[selectedDay] || []

  return (
    <div className="space-y-6">
      {/* Day Selector */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-orange-400" size={20} />
          <h3 className="text-lg font-bold text-white">Select Training Day</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`py-3 px-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                selectedDay === day
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* Workout for Selected Day */}
      <WorkoutDay day={selectedDay} exercises={todayExercises} user={user} />
    </div>
  )
}
