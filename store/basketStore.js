import { defineStore } from "pinia";
import { getBasket } from "../API/basketAPI";
import * as axios from "axios";

export const useBaskteStore = defineStore({
  id: "basket",
  state: () => ({
    changesOnBasket: [],
    basket: [],
  }),
  getters: {
    getBasket: (state) => state.basket,
  },
  mutations: {
    GET_BASKET(state, basket) {
      state.basket = basket;
    },
  },
  actions: {
    async addToBasket(newBasket) {
      this.changesOnBasket = newBasket;
      await this.addToBasketSrvice();
    },
    async removeFromBasket() {
      this.changesOnBasket = "";
      await this.addToBasketSrvice();
    },
    async addToBasketSrvice() {
      try {
        const response = await axios.post(
          "https://animmo.ir/api/cart/",
          this.changesOnBasket
        );
      } catch (error) {
        console.error("basket error is :", error);
      }
    },
    async fetchBasket() {
      try {
        {
          const response = await getBasket();
          const basketData = response.map((element) => ({
            quantity: element.quantity,
            price: element.price,
            total_price: element.total_price,
            id: element.product.id,
            subcategory: element.product.subcategory,
            course: element.product.course,
            category: element.product.category,
            off_price: element.product.off_price,
            image: element.product.image,
            teacher: element.product.teacher,
          }));
          return basketData;
        }
      } catch (error) {
        console.error("fetchBasket error: ", error);
      }
    },
  },
});
