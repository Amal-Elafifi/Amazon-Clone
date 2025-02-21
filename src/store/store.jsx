import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/user.slice";
import { cartReducer } from "../slices/cart.slice";

export const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
    
   },
});
