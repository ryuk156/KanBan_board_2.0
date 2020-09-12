import { CONSTANTS } from "../action";

let listid = 1;
let cardid = 0;

const initialState = {};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        title: action.payload,
        id: `list-${listid}`,
        cards: [],
      };

      const newState = { ...state, [`list-${listid}`]: newList };
      listid += 1;
      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      cardid += 1;
      const { listid } = action.payload;
      const list = state[listid];
      list.cards.push(`card-${cardid}`);
      return { ...state, [listid]: list };
    }

    case CONSTANTS.DRAG_HAPPEN: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;

      if (type === "list") {
        return state;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd,
        };
      }
      return state;
    }

    case CONSTANTS.DELETE_CARD: {
      const { listid, id } = action.payload;

      const list = state[listid];
      const newCards = list.cards.filter((cardid) => cardid !== id);

      return { ...state, [listid]: { ...list, cards: newCards } };
    }

    case CONSTANTS.EDIT_LIST_TITLE: {
      const { listid, newTitle } = action.payload;

      const list = state[listid];
      list.title = newTitle;
      return { ...state, [listid]: list };
    }

    case CONSTANTS.DELETE_LIST: {
      const { listid } = action.payload;
      const newState = state;
      delete newState[listid];
      return newState;
    }

    default:
      return state;
  }
};

export default listReducer;
