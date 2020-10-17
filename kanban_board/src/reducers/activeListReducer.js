import { CONSTANTS } from "../action";

const initialState = null;

const activeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_LIST: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeListReducer;