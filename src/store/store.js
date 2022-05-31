import { configureStore } from "@reduxjs/toolkit";

import itemReducer from "./items/itemsSlice";

const store = configureStore({
  reducer: { items: itemReducer },
});

export default store;
