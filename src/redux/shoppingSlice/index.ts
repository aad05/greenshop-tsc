import { createSlice } from "@reduxjs/toolkit";
import { MainCardType } from "../../@types";

type shoppingSliceType = {
  data: MainCardType[];
  coupon: {
    has_coupon: boolean;
    discount_for: number;
    code?: string;
    title?: string;
  };
  total: number;
};

const _calcTotal = (data: MainCardType[]): number => {
  return Number(
    Number(
      data.reduce(
        (acc, currentValue) =>
          Number(currentValue?.count) * Number(currentValue?.price) + acc,
        0,
      ),
    ).toFixed(2),
  );
};

const initialState: shoppingSliceType = {
  data: [],
  coupon: {
    has_coupon: false,
    discount_for: 0,
  },
  total: 0,
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

      state.total = _calcTotal(state.data);
    },
    increaseCountFromShopping(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload._id
          ? { ...value, count: Number(value.count) + 1 }
          : value,
      );
      state.total = _calcTotal(state.data);
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
      state.total = _calcTotal(state.data);
    },
    deleteFlowerFromShopping(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload._id);
      state.total = _calcTotal(state.data);
    },
    setCoupon(state, { payload }) {
      state.coupon = { ...payload, has_coupon: true };
    },
  },
});
export const {
  addDataToShopping,
  increaseCountFromShopping,
  decreaseCountFromShopping,
  deleteFlowerFromShopping,
  setCoupon,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
