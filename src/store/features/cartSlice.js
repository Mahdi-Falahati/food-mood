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

    removeFromCart(state, action) {
      const index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );
      if (state.shoppingCart[index].count > 1) {
        state.shoppingCart[index].count -= 1;
      } else {
        state.shoppingCart.splice(index, 1);
      }
    },

    clearCart(state) {
      state.shoppingCart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
