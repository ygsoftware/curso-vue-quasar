import { defineStore } from 'pinia'
import authApiService from 'src/services/auth.api.service'
import { User } from 'src/models/user'

interface AuthStoreState {
  user: User|false
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthStoreState => ({
    user: false
  }),

  getters: {
    name (state) {
      return state.user ? `${state.user.firstName} ${state.user.lastName}` : ''
    },
    email (state) {
      return state.user ? state.user.email : ''
    }
  },

  actions: {
    async login (username: string, password: string): Promise<User|false> {
      this.user = false
      const response = await authApiService.login(username, password)
      if (response.data && response.status === 200) {
        this.user = response.data
      }
      return this.user
    },
    logout () {
      this.user = false
    }
  }
})
