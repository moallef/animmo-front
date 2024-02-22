import { defineStore } from "pinia";
import { getCourse } from "~/API/course.js";

export const useCourseStore = defineStore("course", {
  state: () => ({
    course: [],
    categories: [],
    categorySelected: "",
  }),
  getters: {
    getCourse: (state) => state.course,
  },
  mutations: {
    SET_COURSE(state, course) {
      state.course = course;
    },
  },
  actions: {
    async fetchCourse() {
      try {
        if (this.course.length === 0) {
          const response = await getCourse();
          const courseData = response.map((element) => ({
            id: element.id,
            category: element.category,
            subcategory: element.subcategory,
            course: element.course,
            slug: element.slug,
            image: element.image,
            price: element.price,
            teacher: element.teacher,
            discount: element.discount,
            season: element.season,
            duration: element.duration,
            created: element.created,
            updated: element.updated,
          }));
          this.course = courseData;
          return courseData;
        } else {
          return this.course;
        }
      } catch (error) {
        console.error("fetchCourse error: ", error);
      }
    },
    selectedCategory(category) {
      this.categorySelected = category;
      return this.categorySelected
    },
  },
});