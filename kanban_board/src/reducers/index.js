import { combineReducers } from "redux";
import listReducer from "./listReducer";
import cardsReducer from "./cardReducer";
import boardReducer from "./boardReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";

const rootReducer = combineReducers({
  lists: listReducer,
  cards: cardsReducer,
  boards: boardReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,
});

export default rootReducer;
