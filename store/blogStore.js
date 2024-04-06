import { defineStore } from "pinia";
import { getBlog } from '~/API/blog';

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blog: [],
  }), 
  getters: {
    getBlog: (state) => state.blog,
  },
  mutations: {
    SET_BLOG(state, blog) {
      state.blog = blog;
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
            createdAt: element.created,
            imgSrc : element.icon,
            id : element.id,
            banner : element.banner,
          }));
          this.blog = blogData;
          return blogData;
        }
          else{
            return this.blog;
          }
      } catch (error) {
          console.error("fetchBlog error: ",error);
      };
      
    }
  },
  },
);
