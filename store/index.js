import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    aoi: null,
    firstNum: "۰۲۱۳۳۶۷۸۵۵",
    secondNum: "۰۲۱۳۳۶۷۸۴۷",
    workTime: "زمان پاسخگویی تلفن از ساعت ۸ الی 16 روز های غیر تعطیل ",
  },
  getters: {},
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchAOI({ commit }) {
      const response = await axios.get(process.env.BASE_URL);
      commit("setAOI", response.data);
    },
  },
});
