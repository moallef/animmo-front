import { defineStore } from "pinia";
import * as axios from "axios";

export const useCourseViewStore = defineStore("course_view", {
  state: () => ({
    selectedSlug: '',
  }),
  actions: {
    getSlug(slug){
        this.selectedSlug = slug;
    },
    sendSlug(){
        try {
            const response = axios.post(`https://animmo.ir/api/course/view_course?slug=${this.selectedSlug}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        };
    }
  },
});