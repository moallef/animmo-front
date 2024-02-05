import { defineStore } from "pinia";
import * as axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    code: "",
    isAuthenticated: false,
  }),
  actions: {
    setRegistrationData(userData) {
      this.registrationData = userData;
    },
    setLoginData(phoneNumber){
      this.userNumber = phoneNumber;
    },
    async registerUser() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        this.registrationData.expirationDate = expirationDate.getTime();

        const response = await axios.post(
          "https://animmo.ir/api/accounts/register/",
          this.registrationData
        );

        console.log("Registration successful:", response.data);

        await useAuthStore.registerUser();
      } catch (error) {
        throw error;
      }
    },
    async loginUser() {
      try {
        const response = await axios.post(
          "https://animmo.ir/api/accounts/login/",
          this.userNumber
        );
        if (response) {
          this.isAuthenticated = true;
          console.log("Login successful:", response.data);
        } else {
          this.isAuthenticated = false;
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  },
});
