// import redux toolkit 
import { configureStore } from "@reduxjs/toolkit";
// import reducer authentication reducer
import authReducer from "../reducers/authReducer.js";
// import product reducer 
import productsReducer from "../reducers/productsReducer.js";
// import cart reducer 
import cartReducer from "../reducers/cartReducer.js";
// make store for store all reducer function 
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  // middleware set 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
