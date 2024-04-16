import { defineStore } from "pinia";
import * as axios from "axios";

export const useCourseViewStore = defineStore("course_view", {
  state: () => ({
    selectedSlug: '',
    viewCourse: '',
  }),
  actions: {
    getId(id){
        this.selectedId = id;
        this.sendId()
    },
    async sendId(){
        try {
            const response = await axios.get(`https://animmo.ir/api/course/view_course/?id=${this.selectedId}`);
            const element = response.data;
            this.viewCourse = {
              id: element.id,
              category: element.category,
              subcategory: element.subcategory,
              course: element.course,
              slug: element.slug,
              image: element.image,
              price: element.price,
              teacher: element.teacher,
              discount: element.off_price,
              season: element.season,
              duration: element.duration,
              created: element.created,
              updated: element.updated,
              description: element.description,
              contacts_course: element.contacts_course,
              target_course: element.target_course,
              intro : element.intro,
            }
            return this.viewCourse
        } catch (error) {
            console.error(error);
        };
    }
  },
});
