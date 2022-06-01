import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    ADD_ITEM: (state, action) => {
      const item = {
        id: uuidv4(),
        weight: action.payload.weight,
        packetPoint: action.payload.packetPoint,
        date: action.payload.date,
      };
      state.push(item);
    },
    DELETE_ITEM: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    EDIT_ITEM: (state, action) => {
      state.filter((item) => item.id === action.payload.id);
      action.payload.weight = state.weight;
      action.payload.packetPoint = state.packetPoint;
    },
  },
});

export const { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } = itemsSlice.actions;

export default itemsSlice.reducer;
