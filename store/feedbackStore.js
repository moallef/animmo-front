import { defineStore } from "pinia";
import * as axios from "axios";
import { useAuthStore } from "./authenticationStore.js";
import Swal from "sweetalert2";

export const useFeedbackStore = defineStore({
  id: "feedback",
  state: () => ({
    comments: [],
  }),
  actions: {
    async postComment(newComment) {
      try {
        const authStore = useAuthStore();
        const feedback = {
          comment: newComment,
          token: authStore.token,
        };
        if (token) {          
          const response = await axios.post(
            "https://animmo.ir/api/feedback/",
            feedback
          );
        }
        else{
          Swal.fire({
            icon: "error",
            title: 'لطفاابتدا ثبت نام کنید',
            text: "",
          });
        };
        const commentData = response.data;
        this.addComment(commentData);
      } catch (error) {
        console.error("Error posting comment to database:", error);
      }
    },
  },
});
