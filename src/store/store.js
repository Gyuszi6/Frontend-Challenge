import { configureStore } from "@reduxjs/toolkit";
//import itemsReducer from "./items/itemsReducer";
//import formReducer from "./form/formReducer";
import itemReducer from "./items/itemsSlice";

const store = configureStore({
  reducer: { items: itemReducer },
});

export default store;
