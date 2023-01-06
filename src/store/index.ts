import { useAuthStore } from 'modules/auth/store';
import { defineStore } from 'pinia'

export const globalStore = defineStore('global', {
  state: () => ({
    loading: false,
  }),
  actions: {
    async actLoading(status: boolean) {
      this.loading = status
    },
  },
})

const useStore = () => ({
  global: globalStore(),
  auth: useAuthStore(),
});

export default useStore;