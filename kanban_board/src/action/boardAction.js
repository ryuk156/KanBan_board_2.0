import { CONSTANTS } from "../action";
import { v4 as uuid } from "uuid";


export const setActiveBoard = (id) => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id,
  };
};


export const addBoard = (title) => {
  const id = uuid();
  return (dispatch,getState,{getFirebase})=> {
   const firestore=getFirebase().firestore()
   
   firestore.collection("boards").doc(`board-${id}`).set({
     title,
     lists:[],
     id: `board-${id}`, 
     date:new Date()

   }).then(()=>{
     dispatch({
      type: CONSTANTS.ADD_BOARD,
      payload: { title, id },
     })
   }).catch(err=>{
     console.log(err)
   })
  };
};




/*
export const addBoard = (title) => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id },
  };
};
*/
export const deleteBoard = (bid) => {
  return {
    type: CONSTANTS.DELETE_BOARD,
    payload: { bid },
  };
};


