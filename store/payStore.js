import { defineStore } from "pinia";
import * as axios from "axios";
import {useAuthStore} from "./authenticationStore"

export const usePayStore = defineStore("Pay", {
  state: () => ({
    courseId: "",
  }),

  actions: {
    async sendCourseIds(courseId) {
      this.courseId = courseId;
      const JWT = localStorage.getItem("token",(this.token));
      console.log("my token is :" ,JWT);
      try {
        const response = await axios.post(
          "https://animmo.ir/api/cart/pay/",
          this.courseId ,
          {
            headers: {
                Authorization: `Bearer ${JWT}`
              }
          }
        );
        console.log("header is:" , headers);
        console.log(response);
  
      } catch (error) {
          console.error(error);
      };
    },
  },
});
