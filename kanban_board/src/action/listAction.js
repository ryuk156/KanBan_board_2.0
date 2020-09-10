import { CONSTANTS } from "./index.js";

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPEN,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  };
};

export const editTitle = (listid, newTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listid,
      newTitle,
    },
  };
};

export const deleteList = (listid) => {
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: {
      listid,
    },
  };
};
