import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.shoppingCart[index].count += 1;
      } else {
        state.shoppingCart.push({ ...action.payload, count: 1 });
      }
    },

    incrementCount(state, action) {},
    removeFromCart(state, action) {
      const filtered = state.shoppingCart.filter((item) => {
        if (item.id === action.payload) {
          if (item.count >= 2) {
            item.count--;
          }
        } else {
          return item;
        }
      });
      state.shoppingCart = filtered;
    },

    clearCart(state) {
      state.shoppingCart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
