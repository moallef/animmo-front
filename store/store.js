import { defineStore } from "pinia";
import axios from "axios";
import { getCourse } from '~/API/course';

export const useCounterStore = defineStore("counter", {
  state: () => ({
    course: [],
    count: 87,
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
            imgSrc: element.image,
          }));
          console.log('1');
          this.course = courseData;
          return courseData;
        } else {
          console.log('2..5');
          return this.course;
        }
      } catch (error) {
        console.error("fetchCourse error:", error);
      }
    },
  },
});
