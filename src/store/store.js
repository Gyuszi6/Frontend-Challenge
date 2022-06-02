import { configureStore } from "@reduxjs/toolkit";

import stateReducer from "./state/stateSlice";

export const store = configureStore({
  reducer: { state: stateReducer },
});
