import { defineStore } from "pinia";
import * as axios from "axios";
import Swal from "sweetalert2";

export const usePayStore = defineStore("Pay", {
  state: () => ({
    courseId: "",
    url: "",
  }),

  actions: {
    async sendCourseIds(courseIds) {
      const courseIdArray = courseIds.map((course) => course);

      const JWT = localStorage.getItem('token');
      try {
        const response = await axios.post(
          "https://animmo.ir/api/cart/pay/",
          courseIdArray,
          {
            headers: {
              Authorization: `Bearer ${JWT}`,
            },
          }
        );
        if (response.status == 200) {
            this.url = response.data['redirect to : ']; 
          } 
          else {
            console.error("error")
          }
      } catch {
        Swal.fire({
            icon: "error",
            title: "لطفا ابتدا وارد پروفایل خود شوید",
            text: "",
          });
      }
    },
  },
  getters: {
    getUrl() {
      return this.url;
    },
  },
});
