import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    registrationData: {
      name: '',
      familyName: '',
      phoneNumber: '',
      OTP: '',
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

        const response = await this.$axios.post('accounts/register', this.registrationData);

        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  },
});

