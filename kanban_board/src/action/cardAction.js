import { CONSTANTS } from "./index.js";
import { v4 as uuid } from "uuid";

export const addCard = (listid, text) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listid, id },
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
