import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),

  actions: {
    login(username, password, pin) {
      this.isAuthenticated = true;
      return true; 
    },
  },
});
