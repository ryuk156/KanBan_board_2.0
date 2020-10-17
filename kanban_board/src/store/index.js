import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import {getFirebase} from 'react-redux-firebase'
const Store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({
    getFirebase
})));

export default Store;
