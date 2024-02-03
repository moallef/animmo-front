import { defineStore } from "pinia";
import * as axios from 'axios'

export const useFeedbackStore = defineStore({
  id: "feedback",
  state: () => ({
    comments: [],
  }),
  actions: {
    async postCommentToDatabase(newComment) {
      try {
        const response = await axios.post("https://animmo.ir/api/feedback/", {
          comment: newComment,
        });
        const commentData = response.data; 
        this.addComment(commentData);
      } catch (error) {
        console.error("Error posting comment to database:", error);

      }
    },
  },
});
