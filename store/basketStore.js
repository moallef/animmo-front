import { defineStore } from "pinia";

export const useBaskteStore = defineStore({
  id: "basket",
  state: () => ({
    basket: [{ id: "", price: "" }, { remove: "" }, { clear: "" }],
  }),
  actions: {
    addToBasket({ courseId, price }) {
      this.basket[0].push({ courseId, price });

      console.log(
        "Course added to basket:",
        courseId,
        price,
        "User:"
      );
    },
  },
});
