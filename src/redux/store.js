import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

console.log(store);

export default store;