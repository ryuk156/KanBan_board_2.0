import { CONSTANTS } from "./index.js";
import { v4 as uuid } from "uuid";

export const addCard = (listid, text) => {
  const id = uuid();

  return (dispatch,getState,{getFirebase})=> {
    const firestore=getFirebase().firestore()
    const boardID = getState().activeBoard;
    
    firestore.collection('boards').doc(boardID).collection('lists').doc(listid).collection('cards').doc(`card-${id}`).set({
      text,
      listid:listid,
      id:`card-${id}`,
      date: new Date()
    }).then(()=>{
      dispatch({
        type: CONSTANTS.ADD_CARD,
        payload: { text, listid, id },
      })
    }).catch(err=>{
      console.log("err")
    })
    
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


