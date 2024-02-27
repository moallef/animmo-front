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
      console.log("changeOnBasket", this.changesOnBasket);
      await this.addToBasketSrvice();
    },
    async removeFromBasket() {
      this.changesOnBasket = "";
      await this.addToBasketSrvice();
    },
    async addToBasketSrvice() {
      try {
        console.log(this.changesOnBasket);
        const response = await axios.post(
          "https://animmo.ir/api/cart/",
          this.changesOnBasket
        );
        console.log( "post response is: ",response);
      } catch (error) {
        console.error("basket error is :", error);
      }
    },
    async fetchBasket() {
      try {
        {
          const response = await getBasket();
          console.log("response is :", response);
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
