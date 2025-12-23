import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);

      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, qty: 1 }],
      };
    }),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    })),

  clearCart: () => set({ cart: [] }),
}));

export { useCartStore };
