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
        phone_number: "",
        first_name: "",
        last_name: "",
      },
      code: "",
      focusBoolian: true,
      correctData: true,
      token: "",
    };
  },
  actions: {
    setFocusBoolian(newValue) {
      this.focusBoolian = newValue;
    },
    async setRegistrationData(userData) {
      this.registrationData = userData;
      await this.registerUser();
    },
    async setLoginData(phoneNumber) {
      this.loginData = phoneNumber;
      await this.loginUser();
    },
    async setVarifyData(OTP) {
      this.varificationData = OTP;
      if (this.focusBoolian === true) {
        await this.varifyLoginUser();
      }
      if (this.focusBoolian === false) {
        await this.varifyRegesterUser();
      }
    },
    async registerUser() {
      try {
        const response = await axios.post(
          "https://animmo.ir/api/accounts/register/",
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
        console.error(error);
        throw error;
      }
    },
    async loginUser() {
      try {
        const response = await axios.post(
          "https://animmo.ir/api/accounts/login/",
          this.loginData
        );
        if (response.status === 203) {
          this.correctData = false;
          Swal.fire({
            icon: "error",
            title: response.data.massage,
          });
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    async varifyRegesterUser() {
      try {
        const response = await axios.post(
          "https://animmo.ir/api/accounts/register/verify/",
          this.varificationData
        );
        console.log(response);
        if (response.status === 201) {
          this.correctData = true;
          this.token = response.data.access;
          console.log(response.data.access);
          Swal.fire({
            icon: "success",
            title: response.data.massage,
          });
        }
        if (response.status === 203) {
          Swal.fire({
            icon: "error",
            title: response.data.massage,
            text: "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    async varifyLoginUser() {
      try {
        const response = await axios.post(
          "https://animmo.ir/api/accounts/login/verify/",
          this.varificationData
        );
        if (response.status === 200) {
          this.correctData = true;
          this.token = response.data.access;
          console.log('jwt' , this.token);
          console.log("Token set:");
          Swal.fire({
            icon: "success",
            title: response.data.massage,
          });
          this.persistTolocalStorage()
        }
        if (response.status === 203) {
          Swal.fire({
            icon: "error",
            title: response.data.massage,
            text: "",
          });
        }
      } catch (error) {
        console.error("error :", error);
      }
    },
    async setFeedBack(feedback) {
      this.registrationData = userData;
      await this.registerUser();
    },
    persistTolocalStorage(){
      localStorage.setItem("token",this.token);
    }
  },
});
