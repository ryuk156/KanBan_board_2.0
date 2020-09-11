import { CONSTANTS } from "../action";
let listid = 0;
const initialState = ["list-0"];

const listOrderReducer = (state = initialState, action) => {
  console.log("listorder", state);
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      listid += 1;
      const newID = `list-${listid}`;
      return [...state, newID];
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type,
      } = action.payload;
      const newState = state;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...pulledOutList);
        return newState;
      }
      return state;
    }

    case CONSTANTS.DELETE_LIST: {
      const { listid } = action.payload;
      return state.filter((id) => id !== listid);
    }

    default:
      return state;
  }
};

export default listOrderReducer;
