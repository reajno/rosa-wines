import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === product.id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === product.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),
      removeFromCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === product.id
          );

          if (existingItem.quantity === 1) {
            return {
              cart: state.cart.filter((item) => item.id !== product.id),
            };
          } else {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem.id === product.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              ),
            };
          }
        }),

      clearCart: () => set({ cart: [] }),

      totalItems: () => {
        const state = get();
        return state.cart.reduce(
          (total, item) => {
            total.quantity += item.quantity;
            total.price += item.price * item.quantity;
            return total;
          },
          {
            quantity: 0,
            price: 0,
          }
        );
      },
    }),
    { name: "cart-storage", getStorage: () => localStorage }
  )
);

export default useCartStore;
