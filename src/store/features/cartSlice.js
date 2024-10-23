import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.shoppingCart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        } else {
          state.shoppingCart.push({ ...item, count: 1 });
        }
      });
    },

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
