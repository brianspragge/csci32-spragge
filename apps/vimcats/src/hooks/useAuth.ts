import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { gqlClient, setAuthToken, clearAuthToken } from '../services/graphql-client'
import { graphql } from '../generated/gql'
import type { SignUpInput, SignInInput, AuthPayload, UserDto } from '../generated/graphql'
import { ClientError } from 'graphql-request'

const SIGN_UP_MUTATION = graphql(`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
      user {
        user_id
        name
        email
      }
    }
  }
`)

const SIGN_IN_MUTATION = graphql(`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        user_id
        name
        email
      }
    }
  }
`)

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<UserDto | null>(null)
  const [isHydrated, setIsHydrated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsHydrated(true)
  }, [])

  const extractErrorMessage = (err: unknown, fallback: string): string => {
    if (err instanceof ClientError) {
      return err.response?.errors?.[0]?.message || fallback
    }
    return fallback
  }

  const signUp = async (input: SignUpInput): Promise<AuthPayload | null> => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await gqlClient.request(SIGN_UP_MUTATION, { input })

      if (result.signUp) {
        setAuthToken(result.signUp.token)

        setUser(result.signUp.user)
        if (typeof window !== 'undefined') {
          localStorage.setItem('authUser', JSON.stringify(result.signUp.user))
        }

        router.push('/dashboard')

        return result.signUp
      }

      return null
    } catch (err) {
      const errorMessage = extractErrorMessage(err, 'Sign up failed')
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (input: SignInInput): Promise<AuthPayload | null> => {
    try {
      setIsLoading(true)
      setError(null)

      const result = await gqlClient.request(SIGN_IN_MUTATION, { input })

      if (result.signIn) {
        setAuthToken(result.signIn.token)

        setUser(result.signIn.user)
        if (typeof window !== 'undefined') {
          localStorage.setItem('authUser', JSON.stringify(result.signIn.user))
        }

        router.push('/dashboard')

        return result.signIn
      }

      return null
    } catch (err) {
      const errorMessage = extractErrorMessage(err, 'Sign in failed')
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = () => {
    clearAuthToken()
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authUser')
    }
    setError(null)
  }

  const clearError = () => {
    setError(null)
  }

  return {
    isLoading,
    error,
    user,
    isHydrated,
    signUp,
    signIn,
    signOut,
    clearError,
  }
}

// Old Code from prev lab:
// export function useAuth() {
//   const signUp = async (data: {
//     email: string
//     password: string
//     name?: string
//   }) => {
//     console.log('Stub signUp called with', data)

//     return {
//       user: {
//         user_id: '123',
//         name: data.name || 'Test User',
//         email: data.email,
//       },
//     }
//   }

//   const signIn = async (data: { email: string; password: string }) => {
//     console.log('Stub signIn called with', data)

//     return {
//       user: {
//         user_id: '456',
//         name: 'Existing User',
//         email: data.email,
//       },
//     }
//   }

//   const signOut = () => {
//     console.log('Stub signOut called')
//   }

//   return {
//     signUp,
//     signIn,
//     signOut,
//     isLoading: false,
//     error: null,
//     clearError: () => {},
//       user: null,
//   }
// }
