import { defineStore } from "pinia";
import * as axios from "axios";
import Swal from "sweetalert2";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      registrationData: {
        first_name: "",
        last_name: "",
        phone_number: "",
      },
      loginData: {
        phone_number: "",
      },
      varificationData: {
        code: "",
      },
      code: "",
      isAuthenticated: false,
      loggedIn: false,
      correctData: true,
    };
  },
  getters: {
    getCorrectData: state => state.correctData,
  },
  actions: {
    async setRegistrationData(userData) {
      this.registrationData = userData;
      await this.registerUser()
    },
    async setLoginData(phoneNumber) {
      this.loginData = phoneNumber;
      await this.loginUser()
    },
    async setVarifyData(OTP) {
      this.varificationData = OTP;
      await this.varifyUser()
    },
    async registerUser() {
      try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/register/",
        this.registrationData
      );
      if (response.status === 203) {
        this.correctData = false;
        Swal.fire({
          icon: "error",
          title: response.data.massage,
        });
      }

      } catch (error) {
      console.log(error);
      throw error;
      }
    },
    async loginUser() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/accounts/login/",
          this.loginData
        );
        if (response.status === 200) {
          this.isAuthenticated = true;
          console.log("Login successful:", response.data);
        } if(response.status === 203) {
          this.correctData = false;
          this.isAuthenticated = false;
          Swal.fire({
            icon: "error",
            title: response.data.massage,
          });
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    async varifyUser() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/accounts/login/verify/",
          this.varificationData
        );
        console.log(response);
        if (response.status === 200) {
          this.loggedIn = true;
          this.correctData = true;
          Swal.fire({
            icon: "success",
            title: response.data.massage,
          });
        }
        if (response.status === 203) {
          this.loggedIn = true;
          Swal.fire({
            icon: "error",
            title: response.data.massage,
            text: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
