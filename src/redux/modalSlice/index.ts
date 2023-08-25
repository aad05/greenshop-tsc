import { createSlice } from "@reduxjs/toolkit";

type shouldLoadModalType = {
  open: boolean;
  loading: boolean;
};

type modalSliceType = {
  siteMapModalVisibility: boolean;
  authModalVisibility: shouldLoadModalType;
  dashboardModalVisibility: boolean;
  confirmationModalVisibility: boolean;
  trackOrderModalVisibility: boolean;
  addNewPlantModalVisivility: shouldLoadModalType;
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
  addNewPlantModalVisivility: {
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
    setAddNewPlantModalVisibility(state, { payload }) {
      state.addNewPlantModalVisivility = payload;
    },
  },
});
export const {
  setSiteMapModalVisbility,
  setAuthModalVisibility,
  setDashboardModalVisibility,
  setConfirmationModalVisibility,
  setTrackOrderModalVisibility,
  setAddNewPlantModalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
