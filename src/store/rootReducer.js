import { combineReducers } from "redux";
import items from "./items/itemsReducer";
import form from "./form/formReducer";

const rootReducer = combineReducers({
  items,
  form,
});

export default rootReducer;
