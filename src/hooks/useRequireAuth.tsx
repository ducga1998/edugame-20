import { useEffect } from 'react'
import { useAuth } from './useAuth'

export function useRequireAuth() {
  const auth = useAuth()
  console.log(auth)

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.user === false) {
      console.log('need login')
    }
  }, [auth])

  return auth
}
