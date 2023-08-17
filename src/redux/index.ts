import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import shoppingSlice from "./shoppingSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    shopping: shoppingSlice,
  },
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
