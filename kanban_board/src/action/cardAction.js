import { CONSTANTS } from "./index.js";

export const addCard = (listid, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listid },
  };
};

export const editCard = (id, listid, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listid, newText },
  };
};

export const deleteCard = (id, listid) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listid },
  };
};
