import { defineStore } from 'pinia';
import Theblog from '~/pages/theBlog/theblog.vue';

export const useTheBlog = defineStore('theBlog', {
  state: () => ({
    theBlog : [],
  }),

  actions: {
    getTheBlog(theBlog){
        this.theBlog = theBlog;
        return this.TheBlog;
    }
  },
});