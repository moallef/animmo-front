import { defineStore } from 'pinia';

export const useInfoStore = defineStore('Info', {
  state: () => ({
    name : "",
    family : "",
    phoneNunmber : "",
    brithDate : "",
    Email : "",
  }),

  actions: {
  },
});