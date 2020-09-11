import { combineReducers } from "redux";
import listReducer from "./listReducer";
import listOrderReducer from "./listOrder";
import cardsReducer from "./cardReducer";

export default combineReducers({
  lists: listReducer,
  listOrder: listOrderReducer,
  cards: cardsReducer,
});
