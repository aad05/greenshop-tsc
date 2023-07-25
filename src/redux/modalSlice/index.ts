import { createSlice } from "@reduxjs/toolkit";

type authModalType = {
  open: boolean;
  loading: boolean;
};

type modalSliceType = {
  siteMapModalVisibility: boolean;
  authModalVisbility: authModalType;
};

const initialState: modalSliceType = {
  siteMapModalVisibility: false,
  authModalVisbility: {
    open: false,
    loading: false,
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSiteMapModalVisbility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setAuthModalVisibility(state, { payload }) {
      state.authModalVisbility = payload;
    },
  },
});
export const { setSiteMapModalVisbility, setAuthModalVisibility } =
  modalSlice.actions;
export default modalSlice.reducer;
