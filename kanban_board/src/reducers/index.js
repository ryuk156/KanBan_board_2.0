import { combineReducers } from "redux";
import listReducer from "./listReducer";
import cardsReducer from "./cardReducer";
import boardReducer from "./boardReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
  firebase:firebaseReducer,
  firestore:firestoreReducer,
  lists: listReducer,
  cards: cardsReducer,
  boards: boardReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,

});

export default rootReducer;
