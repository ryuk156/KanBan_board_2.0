import { CONSTANTS } from "../action/index";
import { v4 as uuidv4 } from "uuid";
let listid = uuidv4();
let cardid = uuidv4();
const initialState = [
  {
    title: "Welcome!",
    id: 0,
    cards: [
      {
        id: 0,
        text: "welcome to react frame work",
      },
      {
        id: 1,
        text: "Basic start",
      },
    ],
  },
  {
    title: "Welcome!",
    id: 1,
    cards: [
      {
        id: 0,
        text: "welcome to react frame work",
      },
      {
        id: 1,
        text: "Basic start",
      },
      {
        id: 2,
        text: "Basic start",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listid,
      };
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardid,
      };

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
    default:
      return state;
  }
};

export default listReducer;
