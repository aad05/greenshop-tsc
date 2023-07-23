import { createSlice } from "@reduxjs/toolkit";

type modalSliceType = {
  siteMapModalVisibility: boolean;
};

const initialState: modalSliceType = {
  siteMapModalVisibility: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSiteMapModalVisbility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
  },
});
export const { setSiteMapModalVisbility } = modalSlice.actions;
export default modalSlice.reducer;
