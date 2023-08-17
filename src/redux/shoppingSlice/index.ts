import { createSlice } from "@reduxjs/toolkit";
import { MainCardType } from "../../@types";

type shoppingSliceType = {
  data: MainCardType[];
};

const initialState: shoppingSliceType = {
  data: [],
};

const shoppingSlice = createSlice({
  name: "shoppingSlice",
  initialState,
  reducers: {
    addDataToShopping(state, { payload }) {
      state.data = state.data.some((value) => value._id === payload._id)
        ? state.data.map((value) =>
            value._id === payload._id
              ? { ...payload, count: Number(value.count) + 1 }
              : value,
          )
        : [...state.data, { ...payload, count: 1 }];
    },
    increaseCountFromShopping(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload._id
          ? { ...value, count: Number(value.count) + 1 }
          : value,
      );
    },
    decreaseCountFromShopping(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload._id
          ? {
              ...value,
              count: Number(value.count) ? Number(value.count) - 1 : 1,
            }
          : value,
      );
    },
  },
});
export const {
  addDataToShopping,
  increaseCountFromShopping,
  decreaseCountFromShopping,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
