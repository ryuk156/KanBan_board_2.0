import { CONSTANTS } from "../action";
import { v4 as uuid } from "uuid";


export const setActivelist = (id) => {
  return {
    type: CONSTANTS.SET_ACTIVE_LIST,
    payload: id,
  };
};



export const addList = (title) => {
  return (dispatch, getState ,{getFirebase}) => {
    const firestore=getFirebase().firestore()
    const boardID = getState().activeBoard;
    const id = uuid();
    firestore.collection('boards').doc(boardID).collection('lists').doc(`list-${id}`).set({
      title,
      boardID:boardID,
      id:`list-${id}`,
      date:new Date()
    }).then(()=>{
       
      dispatch({
        type: CONSTANTS.ADD_LIST,
        payload: { title, boardID, id },
      });
    }).catch(err=>{
      console.log(err)
    })
    
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
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    dispatch({
      type: CONSTANTS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID,
      },
    });
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
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    return dispatch({
      type: CONSTANTS.DELETE_LIST,
      payload: {
        listid,
        boardID,
      },
    });
  };
};
