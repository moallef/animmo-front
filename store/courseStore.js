import { defineStore } from "pinia";
import { getCourse } from "~/API/course";

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
            subCategory: element.subcategory,
            course: element.course,
            imgSrc: element.image,
            price: element.price,
            season: element.season,
            duration: element.duration,
            teacher: element.teacher,
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
