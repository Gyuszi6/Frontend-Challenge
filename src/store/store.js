import { configureStore } from "@reduxjs/toolkit";

import itemReducer from "./items/itemsSlice";
import formReducer from "./form/formSlice";

const store = configureStore({
  reducer: { items: itemReducer, form: formReducer },
});

export default store;
