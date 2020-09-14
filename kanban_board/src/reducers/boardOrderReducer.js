import { CONSTANTS } from "../action";
import { v4 as uuid } from "uuid";

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }

    case CONSTANTS.DELETE_BOARD: {
      const { bid } = action.payload;

      return state.filter((id) => id !== bid);
    }

    default:
      return state;
  }
};

export default boardOrderReducer;
