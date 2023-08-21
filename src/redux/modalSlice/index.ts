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
  trackOrderModalVisibility: boolean;
};

const initialState: modalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    open: false,
    loading: false,
  },
  dashboardModalVisibility: false,
  confirmationModalVisibility: false,
  trackOrderModalVisibility: false,
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
    setTrackOrderModalVisibility(state) {
      state.trackOrderModalVisibility = !state.trackOrderModalVisibility;
    },
  },
});
export const {
  setSiteMapModalVisbility,
  setAuthModalVisibility,
  setDashboardModalVisibility,
  setConfirmationModalVisibility,
  setTrackOrderModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
