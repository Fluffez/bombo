import { create } from 'zustand'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc
} from 'firebase/firestore'
import { auth, db } from './firebase'

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

export const useFirebaseStore = create((set) => ({
  currentUser: null,
  users: [],
  loading: true,
  error: null,

  // Auth Functions
  register: async (email, password, name, height, weight, age) => {
    try {
      set({ loading: true, error: null })
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const uid = userCredential.user.uid

      // Firestore'a user doc oluştur
      await setDoc(doc(db, 'users', uid), {
        uid,
        email,
        name,
        height: parseInt(height),
        weight: parseInt(weight),
        age: age ? parseInt(age) : null,
        program: defaultProgram,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      set({ currentUser: userCredential.user, loading: false })
      return userCredential.user
    } catch (error) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  login: async (email, password) => {
    try {
      set({ loading: true, error: null })
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      set({ currentUser: userCredential.user, loading: false })
      return userCredential.user
    } catch (error) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  logout: async () => {
    try {
      set({ loading: true })
      await signOut(auth)
      set({ currentUser: null, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  // User Functions
  fetchUserData: async (uid) => {
    try {
      const userDoc = await getDocs(query(collection(db, 'users'), where('uid', '==', uid)))
      if (!userDoc.empty) {
        return userDoc.docs[0].data()
      }
      return null
    } catch (error) {
      console.error('Error fetching user:', error)
      return null
    }
  },

  updateUserStats: async (uid, stats) => {
    try {
      await updateDoc(doc(db, 'users', uid), {
        ...stats,
        updatedAt: new Date()
      })
    } catch (error) {
      set({ error: error.message })
      throw error
    }
  },

  updateUserProgram: async (uid, program) => {
    try {
      await updateDoc(doc(db, 'users', uid), {
        program,
        updatedAt: new Date()
      })
    } catch (error) {
      set({ error: error.message })
      throw error
    }
  },

  // Auth state listener
  initAuthListener: () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await useFirebaseStore.getState().fetchUserData(user.uid)
        set({ currentUser: user, loading: false })
      } else {
        set({ currentUser: null, loading: false })
      }
    })
  }
}))
