import { CONSTANTS } from "../action/index";
import { v4 as uuidv4 } from "uuid";
let listid = 2;
let cardid = 5;
const initialState = [
  {
    title: "Welcome!",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "welcome to react frame work",
      },
      {
        id: `card-${1}`,
        text: "Basic start",
      },
    ],
  },
  {
    title: "Welcome!",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "welcome to react frame work",
      },
      {
        id: `card-${3}`,
        text: "Basic start",
      },
      {
        id: `card-${4}`,
        text: "Basic jkbjbkbkstart",
      },
      {
        id: `card-${5}`,
        text: "Basic start hello",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listid}`,
      };
      listid += 1;
      return [...state, newList];
    }
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardid}`,
      };
      cardid += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listid) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
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
      const newState = [...state];

      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }

    case CONSTANTS.EDIT_CARD: {
      const { id, listid, newText } = action.payload;
      return state.map((list) => {
        if (list.id === listid) {
          const newCards = list.cards.map((card) => {
            if (card.id === id) {
              card.text = newText;
              return card;
            }
            return card;
          });
          return { ...list, cards: newCards };
        }
        return list;
      });
    }
    default:
      return state;
  }
};

export default listReducer;
