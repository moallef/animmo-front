import { defineStore } from "pinia";
import { getBlog } from '~/API/blog';

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blog: [],
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
  },
);
