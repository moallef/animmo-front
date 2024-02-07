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
    };
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
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accounts/register/",
        this.registrationData
      );
      console.log("Registration response:");
      console.log(response.massage);
      if (response.status === 400) {
        Swal.fire({
          icon: "info",
          title: response.data.massage,
          text: "",
        });
      }
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: response.data.massage,
        });
      }

      // console.log("Registration successful:", response.data);

      // await useAuthStore.registerUser();
      } catch (error) {
      console.log(error);
      console.log('hi');
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
        const response = await axios.post(
          "http://127.0.0.1:8000/api/accounts/login/verify/",
          this.varificationData
        );
        if (response.status === 500) {
          this.loggedIn = false;
          Swal.fire({
            icon: "info",
            title: response.massage,
            text: "",
          });
        }
        if (response.status === 400) {
          this.loggedIn = false;
          Swal.fire({
            title: response.massage,
            text: "",
          });
        } else {
          this.loggedIn = true;
          Swal.fire({
            icon: "success",
            title: response.massage,
            text: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
