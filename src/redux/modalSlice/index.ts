import { createSlice } from "@reduxjs/toolkit";

type authModalType = {
  open: boolean;
  loading: boolean;
};

type modalSliceType = {
  siteMapModalVisibility: boolean;
  authModalVisibility: authModalType;
  dashboardModalVisibility: boolean;
  confirmationModalVisibility: boolean;
};

const initialState: modalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    open: false,
    loading: false,
  },
  dashboardModalVisibility: false,
  confirmationModalVisibility: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSiteMapModalVisbility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setAuthModalVisibility(state, { payload }) {
      state.authModalVisibility = payload;
    },
    setDashboardModalVisibility(state) {
      state.dashboardModalVisibility = !state.dashboardModalVisibility;
    },
    setConfirmationModalVisibility(state) {
      state.confirmationModalVisibility = !state.confirmationModalVisibility;
    },
  },
});
export const {
  setSiteMapModalVisbility,
  setAuthModalVisibility,
  setDashboardModalVisibility,
  setConfirmationModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
