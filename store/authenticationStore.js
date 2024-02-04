import { defineStore } from 'pinia';
import * as axios from 'axios';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    registrationData: {
      expirationDate: 0,
    },
  }),
  actions: {
    setRegistrationData(data) {
      this.registrationData = data;
    },
    async registerUser() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        this.registrationData.expirationDate = expirationDate.getTime();

        const response = await axios.post('http://127.0.0.1:8000/accounts/register/', this.registrationData);

        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  },
});

