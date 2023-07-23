import { createSlice } from "@reduxjs/toolkit";

type modalSliceType = {
  siteMapModalVisibility: boolean;
  authModalVisbility: boolean;
};

const initialState: modalSliceType = {
  siteMapModalVisibility: false,
  authModalVisbility: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSiteMapModalVisbility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setAuthModalVisibility(state) {
      state.authModalVisbility = !state.authModalVisbility;
    },
  },
});
export const { setSiteMapModalVisbility, setAuthModalVisibility } =
  modalSlice.actions;
export default modalSlice.reducer;
