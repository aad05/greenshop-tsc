import { createSlice } from "@reduxjs/toolkit";
import { MainCardType } from "../../@types";
import { deletter, getter, setter } from "../../hooks/useLocalStorage";

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
  data: getter({ key: "shopping_card" }) ?? [],
  coupon: {
    has_coupon: false,
    discount_for: 0,
  },
  total: getter({ key: "total_price" }) ?? 0,
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
      setter({ key: "shopping_card", setValue: state.data });
      setter({ key: "total_price", setValue: state.total });
    },
    increaseCountFromShopping(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload._id
          ? { ...value, count: Number(value.count) + 1 }
          : value,
      );
      state.total = _calcTotal(state.data);
      setter({ key: "shopping_card", setValue: state.data });
      setter({ key: "total_price", setValue: state.total });
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
      setter({ key: "shopping_card", setValue: state.data });
      setter({ key: "total_price", setValue: state.total });
    },
    deleteFlowerFromShopping(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload._id);
      state.total = _calcTotal(state.data);
      setter({ key: "shopping_card", setValue: state.data });
      setter({ key: "total_price", setValue: state.total });
    },
    setCoupon(state, { payload }) {
      state.coupon = { ...payload, has_coupon: true };
    },
    makeEverythingZero(state) {
      state.data = [];
      state.coupon = {
        has_coupon: false,
        discount_for: 0,
      };
      state.total = 0;
      deletter({ key: "shopping_card" });
      deletter({ key: "total_price" });
    },
  },
});
export const {
  addDataToShopping,
  increaseCountFromShopping,
  decreaseCountFromShopping,
  deleteFlowerFromShopping,
  setCoupon,
  makeEverythingZero,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
