import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  actualWeight: localStorage.getItem("weight")
    ? JSON.parse(localStorage.getItem("weight"))
    : "",
  actualPacketPoint: localStorage.getItem("packetpoint")
    ? JSON.parse(localStorage.getItem("packetpoint"))
    : "",
  actualId: localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id"))
    : "",
};

const stateSlice = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    ADD_ITEM: (state, action) => {
      const item = {
        id: uuidv4(),
        weight: action.payload.weight,
        packetPoint: action.payload.packetPoint,
        date: action.payload.date,
      };
      state.items.push(item);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    DELETE_ITEM: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    START_EDIT_ITEM: (state, action) => {
      state.actualId = action.payload.id;
      state.actualWeight = action.payload.weight;
      state.actualPacketPoint = action.payload.packetPoint;
      localStorage.setItem("weight", JSON.stringify(action.payload.weight));
      localStorage.setItem("id", JSON.stringify(action.payload.id));
      localStorage.setItem(
        "packetpoint",
        JSON.stringify(action.payload.packetPoint)
      );
    },
    SAVE_EDITED_ITEM: (state, action) => {
      let id = "";
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === state.actualId) {
          id = i;
          break;
        }
      }
      state.items[id].weight = action.payload.weight;
      state.items[id].packetPoint = action.payload.packetPoint;
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    SET_ACTUAL_WEIGHT: (state, action) => {
      state.actualWeight = action.payload;
      localStorage.setItem("weight", JSON.stringify(action.payload));
    },
    SET_ACTUAL_PACKET_POINT: (state, action) => {
      state.actualPacketPoint = action.payload;
      localStorage.setItem("packetpoint", JSON.stringify(action.payload));
    },
    SET_ACTUAL_ID: (state, action) => {
      state.actualId = action.payload;
      localStorage.setItem("id", JSON.stringify(action.payload));
    },
  },
});

export const {
  ADD_ITEM,
  DELETE_ITEM,
  START_EDIT_ITEM,
  SAVE_EDITED_ITEM,
  SET_ACTUAL_WEIGHT,
  SET_ACTUAL_PACKET_POINT,
  SET_ACTUAL_ID,
} = stateSlice.actions;

export default stateSlice.reducer;
