import { AUTH_TOKEN } from 'core/constants'
import { defineStore } from 'pinia'
import type { AuthState } from './types'


export const useState = defineStore({
  id: 'auth.state',
  state: (): AuthState => {
    return {
      isAuthenticated: !!localStorage.getItem(AUTH_TOKEN),
    }
  },
})
