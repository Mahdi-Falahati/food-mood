import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./features/foodSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
  },
});
