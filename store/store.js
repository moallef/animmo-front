import { defineStore } from "pinia";
import { getCourse } from '~/API/course';
import { getBlog } from '~/API/blog'

export const useCounterStore = defineStore("counter", {
  state: () => ({
    course: [],
    blog: [],
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
    async fetchBlog(){
      try {
        if (this.blog.length === 0) {
          const response = await getBlog();
          const blogData = response.map((element) => ({
            user : element.user,
            title : element.title,
            body: element.body,
            createdAt: element.created
          }));
          this.blog = blogData;
          return blogData;
        }
          else{
            return this.blog;
          }
      } catch (error) {
          console.log("fetchBlog error: ",error);
      };
      
    }
  },
});
