import { defineStore } from 'pinia';

export const useTheBlog = defineStore('theBlog', {
  state: () => ({
    theBlog: {},
  }),

  actions: {
    getTheBlog() {
      return this.theBlog;
    },
    addBlog(blog) {
      this.theBlog = blog;
    }
  },
});