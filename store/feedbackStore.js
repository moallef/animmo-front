import { defineStore } from "pinia";
import * as axios from "axios";
import { getFeedbacks } from "../API/feedbacks";
import { useAuthStore } from "./authenticationStore.js";
import Swal from "sweetalert2";

export const useFeedbackStore = defineStore({
  id: "feedback",
  state: () => ({
    comments: "",
  }),
  actions: {
    async fetchFeedbacks() {
      try {
        if (this.comments.length === 0) {
          const response = await getFeedbacks();
          const feedbackData = response.map((element) => ({
            id: element.id,
            user: element.user,
            message: element.message,
            created: element.created,
            available: element.available,
          }));
          this.comments = feedbackData;
          return feedbackData;
        } else {
          return this.comments;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async setComment(newComment) {
      try {
        const authStore = useAuthStore();
        const token = authStore.token;
        const feedback = {
          comment: newComment,
          token: token,
        };
        if (token) {
          const response = await axios.post(
            "https://animmo.ir/api/feedback/",
            feedback
          );
        } else {
          Swal.fire({
            icon: "error",
            title: "لطفاابتدا ثبت نام کنید",
            text: "",
          });
        }
        const commentData = response.data;
        this.addComment(commentData);
      } catch (error) {
        console.error("Error posting comment to database:", error);
      }
    },
  },
});
