import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    setItems(items) {
      this.items = items;
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});
