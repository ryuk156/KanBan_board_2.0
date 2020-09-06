import { CONSTANTS } from "./index.js";

export const addCard = (listid, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listid },
  };
};
