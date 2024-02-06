import { defineStore } from "pinia";
import * as axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return{
      registrationData: {
        first_name: '',
        last_name: '',
        phone_number: '',
      },
      loginData :{
        phone_number : '',
      },
      varificationData : {
        code  : '',
      },
      code: "",
      isAuthenticated: false,
      loggedIn: false,
    }
  },
  actions: {
    setRegistrationData(userData) {
      this.registrationData = userData;
    },
    setLoginData(phoneNumber) {
      this.loginData = phoneNumber;
    },
    setVarifyData(OTP) {
      this.varificationData = OTP;
    },
    async registerUser() {
      try {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);

        this.registrationData.expirationDate = expirationDate.getTime();

        const response = await axios.post(
          "http://127.0.0.1:8000/api/accounts/register/",
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
          "http://127.0.0.1:8000/api/accounts/login/",
          this.loginData
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
    async varifyUser() {
      try {
        console.log(this.varificationData);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/accounts/login/verify/",
          this.varificationData
        );
        if (response === 'invalid data') {
          this.loggedIn = false;
          alert('دوباره امتحان کنید');
        }
        if (response === 'invalid code') {
          this.loggedIn = false;
          alert('کد وارد شده نامعتبر است');
        }else{
          this.loggedIn = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
