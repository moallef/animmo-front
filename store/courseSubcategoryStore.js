import { defineStore } from "pinia";
import { getCourse } from "~/API/subcategory";

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
            count_course: element.count_course,
            subCategory: element.subcategory,
            slug: element.slug,
            image: element.image,
          }));
          this.course = courseData;
          console.log('uiuui',this.course);
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
