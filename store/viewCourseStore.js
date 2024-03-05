import { defineStore } from "pinia";
import * as axios from "axios";

export const useCourseViewStore = defineStore("course_view", {
  state: () => ({
    selectedSlug: '',
  }),
  actions: {
    getSlug(slug){
        this.selectedSlug = slug;
        console.log(this.selectedSlug);
        this.sendSlug()
    },
    async sendSlug(){
        try {
            const response = await axios.post(`https://animmo.ir/api/course/view_course?slug=${this.selectedSlug}`);
            console.log("hi",response);
        } catch (error) {
            console.error(error);
        };
    }
  },
});
