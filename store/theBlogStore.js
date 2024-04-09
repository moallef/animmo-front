import { defineStore } from 'pinia';

export const useTheBlog = defineStore('theBlog', {
  state: () => ({
    theBlog: [],
  }),

  actions: {
    getTheBlog(Blog) {
      this.theBlog = Blog;
      return this.theBlog;
    }
  },
});