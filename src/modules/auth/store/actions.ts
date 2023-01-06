import { AUTH_TOKEN } from 'core/constants'
import { defineStore } from 'pinia'
import type { ILogin } from './types'


export const useActions = defineStore('auth.actions', () => {
  const actionLogin = async (_: ILogin) => {
    localStorage.setItem(AUTH_TOKEN, 'user')
    window.location.href = '/'
  }
  const actionLogout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    window.location.href = '/login'
  }

  return {
    actionLogin,
    actionLogout,
  }
})
