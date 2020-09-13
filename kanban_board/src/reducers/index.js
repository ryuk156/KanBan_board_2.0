import { combineReducers } from "redux";
import listReducer from "./listReducer";
import cardsReducer from "./cardReducer";
import boardReducer from "./boardReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({
  lists: listReducer,
  cards: cardsReducer,
  boards: boardReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,
});
