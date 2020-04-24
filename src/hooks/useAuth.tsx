import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase, { User } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase-storage'

export interface IProviderAuth {
  user: User | null | false
  signInWithGoogle: () => Promise<void>
  signout: () => Promise<void>
}

// Add your Firebase credentials
firebase.initializeApp({
  apiKey: 'AIzaSyB1e-Dj1GG8GTOBlm0kdwme90dga4eE9a8',
  authDomain: 'edugame-20.firebaseapp.com',
  databaseURL: 'https://edugame-20.firebaseio.com',
  projectId: 'edugame-20',
  storageBucket: 'edugame-20.appspot.com',
  messagingSenderId: '91743019195',
  appId: '1:91743019195:web:33919c0c1a98c04450899e',
  measurementId: 'G-SCTMEKMNT4',
})

export default firebase

const authContext = createContext<Partial<IProviderAuth>>({})

export const ProvideAuth: React.FC<{}> = ({ children }) => {
  const auth: IProviderAuth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth(): IProviderAuth {
  const [user, setUser] = useState<User | null | false>(null)

  const signInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().useDeviceLanguage()
      const result = await firebase.auth().signInWithPopup(provider)
      setUser(result.user)
    } catch (error) {
      console.log(error)
      setUser(false)
    }
  }

  const signout = async () => {
    try {
      await firebase.auth().signOut()
      setUser(null)
    } catch (error) {
      console.log(error)
      setUser(null)
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    signInWithGoogle,
    signout,
  }
}
