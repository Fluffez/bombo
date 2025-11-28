import React, { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

export default function RestTimer({ onComplete }) {
  const [seconds, setSeconds] = useState(90) // Default 90 seconds rest
  const [isRunning, setIsRunning] = useState(false)
  const [customTime, setCustomTime] = useState(90)

  useEffect(() => {
    let interval
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(s => s - 1)
      }, 1000)
    } else if (seconds === 0 && isRunning) {
      playNotification()
      setIsRunning(false)
      onComplete()
    }
    return () => clearInterval(interval)
  }, [isRunning, seconds, onComplete])

  const playNotification = () => {
    // Create a relaxing notification sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const now = audioContext.currentTime
    
    // Create a pleasant bell-like sound
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()
    
    osc.connect(gain)
    gain.connect(audioContext.destination)
    
    osc.frequency.setValueAtTime(800, now)
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.5)
    
    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5)
    
    osc.start(now)
    osc.stop(now + 0.5)
  }

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60)
    const s = secs % 60
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const presets = [30, 60, 90, 120, 180]

  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-500/50 rounded-xl p-6">
      <h4 className="text-lg font-bold text-white mb-4 text-center">Rest Timer</h4>
      
      {/* Timer Display */}
      <div className={`text-6xl font-bold text-center mb-6 font-mono tracking-wider ${
        seconds <= 10 ? 'text-red-400 pulse-glow' : 'text-blue-400'
      }`}>
        {formatTime(seconds)}
      </div>

      {/* Presets */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {presets.map((preset) => (
          <button
            key={preset}
            onClick={() => {
              setSeconds(preset)
              setCustomTime(preset)
              setIsRunning(false)
            }}
            className={`py-2 px-2 rounded-lg font-semibold text-sm transition-all ${
              seconds === preset && !isRunning
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {preset}s
          </button>
        ))}
      </div>

      {/* Custom Time Input */}
      <div className="mb-6">
        <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">Custom Time (seconds)</label>
        <input
          type="number"
          value={customTime}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 0
            setCustomTime(val)
            if (!isRunning) setSeconds(val)
          }}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
            isRunning
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isRunning ? (
            <>
              <Pause size={18} />
              Pause
            </>
          ) : (
            <>
              <Play size={18} />
              Start
            </>
          )}
        </button>
        <button
          onClick={() => {
            setSeconds(customTime)
            setIsRunning(false)
          }}
          className="py-2 px-4 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <RotateCcw size={18} />
          Reset
        </button>
      </div>
    </div>
  )
}
