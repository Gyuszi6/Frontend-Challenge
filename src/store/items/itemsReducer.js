import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ADD_ITEM } from "./itemsActions";

const initialItemState = {
  id: 0,
  weight: 0,
  packetPoint: "",
  date: null,
};

const initialState = [];

const manipulateItemSlice = createSlice({
  name: uuidv4(),
  initialState,
  reducers: {
    ADD_ITEM(state) {
      return [...initialState, initialItemState];
    },
  },
});

export default manipulateItemSlice;

/*const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM: {
      const item = {
        id: uuidv4(),
        weight: payload.weight,
        packetPoint: payload.packetPoint,
        date: new Date(),
      };
      return [...state, item];
    }
  }
};

export default itemsReducer;*/
