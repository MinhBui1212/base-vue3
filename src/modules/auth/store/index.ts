import { defineStore } from 'pinia'
import { extractStore } from 'utils/extractStore'
import { useActions } from './actions'
import { useGetters } from './getters'
import { useState } from './state'

export const useAuthStore = defineStore('auth', () => {
  return {
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
  }
})
