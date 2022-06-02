import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  weight: "",
  packetPoint: "",
  actualId: "",
};

const formSlice = createSlice({
  name: "form",
  initialState: initialFormState,
  reducers: {
    SET_WEIGHT: (state, action) => {
      state.weight = action.payload.weight;
    },
    SET_PACKETPOINT: (state, action) => {
      state.packetPoint = action.payload.packetPoint;
    },
    SET_ACTUAL_ID: (state, action) => {
      state.actualId = action.payload.actualId;
    },
  },
});

export const { SET_WEIGHT, SET_PACKETPOINT, SET_ACTUAL_ID } = formSlice.actions;

export default formSlice.reducer;
