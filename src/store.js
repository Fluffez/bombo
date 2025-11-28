import { create } from 'zustand'

const defaultProgram = {
  'Monday': [
    { name: 'BENCH PRESS', sets: 4, reps: '6-8', rir: '1-2', failure: 'Son set failure' },
    { name: 'LAT PULLDOWN', sets: 4, reps: '8-10', rir: '1-2', failure: 'Son set failure' },
    { name: 'SQUAT', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'SQUAT', sets: 2, reps: '12-15', rir: '', failure: '' },
    { name: 'INCLINE DUMBELL PRESS', sets: 4, reps: '6-8', rir: '1-2', failure: 'Son set failure' },
    { name: 'BARBELL ROW', sets: 4, reps: '8-10', rir: '1-2', failure: 'Son set failure' },
    { name: 'LEG PRESS', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'LEG PRESS', sets: 2, reps: '12-15', rir: '', failure: '' },
    { name: 'CABLE CROSS', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'CABLE ROW', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'LEG CURL', sets: 5, reps: '12-15', rir: '', failure: 'Failure' }
  ],
  'Tuesday': [
    { name: 'OVERHEAD PRESS', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'ROPE PULLOVER', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'CALF RAISE', sets: 4, reps: '15-20', rir: '', failure: 'Failure' },
    { name: 'LATERAL RAISE', sets: 4, reps: '12-15', rir: '', failure: 'Beyond failure' },
    { name: 'PULL UP', sets: 1, reps: 'Max', rir: '', failure: 'Failure' },
    { name: 'REAR DELT', sets: 3, reps: '12-15', rir: '', failure: 'Beyond failure' },
    { name: 'BARBELL CURL', sets: 4, reps: '8-10', rir: '1', failure: 'Failure' },
    { name: 'TRICEPS PUSHDOWN', sets: 4, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'DUMBELL CURL', sets: 4, reps: '8-10', rir: '1', failure: 'Failure' }
  ],
  'Wednesday': [
    { name: 'INCLINE DUMBELL PRESS', sets: 4, reps: '6-8', rir: '1-2', failure: '' },
    { name: 'LAT PULLDOWN', sets: 4, reps: '8-10', rir: '1-2', failure: 'Son set failure' },
    { name: 'CABLE CROSS', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'CABLE ROW', sets: 4, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'OVERHEAD PRESS', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'ROMANIAN DEADLIFT', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'LATERAL RAISE', sets: 3, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'LATERAL RAISE', sets: 3, reps: '12-15', rir: '', failure: 'Beyond failure' },
    { name: 'DUMBELL CURL', sets: 4, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'REAR DELT', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'LEG PRESS', sets: 5, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'TRICEPS PUSHDOWN', sets: 4, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'CALF RAISE', sets: 4, reps: '15-20', rir: '', failure: 'Failure' }
  ],
  'Friday': [
    { name: 'INCLINE DUMBELL PRESS', sets: 4, reps: '6-8', rir: '1-2', failure: '' },
    { name: 'LAT PULLDOWN', sets: 4, reps: '8-10', rir: '1-2', failure: 'Son set failure' },
    { name: 'CABLE CROSS', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'CABLE ROW', sets: 4, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'OVERHEAD PRESS', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'ROMANIAN DEADLIFT', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'LATERAL RAISE', sets: 3, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'LATERAL RAISE', sets: 3, reps: '12-15', rir: '', failure: 'Beyond failure' },
    { name: 'DUMBELL CURL', sets: 4, reps: '8-10', rir: '', failure: 'Failure' }
  ],
  'Saturday': [
    { name: 'INCLINE DUMBELL PRESS', sets: 4, reps: '6-8', rir: '1-2', failure: '' },
    { name: 'LAT PULLDOWN', sets: 4, reps: '8-10', rir: '1-2', failure: 'Son set failure' },
    { name: 'CABLE CROSS', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'CABLE ROW', sets: 4, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'OVERHEAD PRESS', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'ROMANIAN DEADLIFT', sets: 4, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'LATERAL RAISE', sets: 3, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'LATERAL RAISE', sets: 3, reps: '12-15', rir: '', failure: 'Beyond failure' },
    { name: 'DUMBELL CURL', sets: 4, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'REAR DELT', sets: 3, reps: '12-15', rir: '', failure: 'Failure' },
    { name: 'LEG PRESS', sets: 5, reps: '8-10', rir: '1-2', failure: '' },
    { name: 'TRICEPS PUSHDOWN', sets: 4, reps: '8-10', rir: '', failure: 'Failure' },
    { name: 'CALF RAISE', sets: 4, reps: '15-20', rir: '', failure: 'Failure' }
  ]
}

export const useStore = create((set) => ({
  users: [],
  currentUser: null,
  
  addUser: (user) => set((state) => ({
    users: [...state.users, { ...user, id: Date.now(), program: JSON.parse(JSON.stringify(defaultProgram)) }]
  })),
  
  setCurrentUser: (userId) => set((state) => ({
    currentUser: state.users.find(u => u.id === userId)
  })),
  
  updateUserStats: (userId, stats) => set((state) => ({
    users: state.users.map(u => u.id === userId ? { ...u, ...stats } : u),
    currentUser: state.currentUser?.id === userId ? { ...state.currentUser, ...stats } : state.currentUser
  })),
  
  updateUserProgram: (userId, program) => set((state) => ({
    users: state.users.map(u => u.id === userId ? { ...u, program } : u),
    currentUser: state.currentUser?.id === userId ? { ...state.currentUser, program } : state.currentUser
  })),
  
  deleteUser: (userId) => set((state) => ({
    users: state.users.filter(u => u.id !== userId),
    currentUser: state.currentUser?.id === userId ? null : state.currentUser
  }))
}))
