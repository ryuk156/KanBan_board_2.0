import React, { PureComponent } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort, setActiveBoard } from "../action";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  
`;

class Board extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const { boardID,listid } = this.props.match.params;
   
    this.props.dispatch(setActiveBoard(boardID));
  }
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    
    
    const { lists, boards, match, cards } = this.props;
    const { boardID } = match.params;
    
    
    const listOrder = boardID.lists;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App" style={{ padding: "20px" }}>
          <Droppable droppableId="all-list" direction="horizontal" type="list">
            {(provided) => (
              <ListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {boards && boards.map((listid) => {
                 return (
                   <div>
                { listid.lists &&  listid.lists.map((lid,index)=>{
                    const { id } = match.params;
                    return (
                      
                      <List
                        listid={lid.id}
                        title={lid.title}
                        key={lid.id}
                        boardID={lid.boardID}
                        index={index}
                      />
                    );
                   })
                  }
                  </div>
                )})}
                {provided.placeholder}
                <ActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
    
  }
}


/*
const mapToProps = (state) => ({
  lists: state.lists,
  cards: state.cards,
  boards: state.boards,
});

export default connect(mapToProps)(Board);

*/

const mapToProps = (state) => {
 const  x=state.firestore.ordered.boards
 console.log(state)
  return {
    boards: state.firestore.ordered.boards,
   
  }
  
};

export default compose(connect(mapToProps),


firestoreConnect((ownprops,id) => {
  console.log(ownprops)
  

  return[
    
      {
        collection:"boards",
        doc: ownprops.match.params.boardID,
         subcollections:[{
           collection:"lists",
           
         
          
           
         }]
      
      }
    
  ]
  
    
  

})

) (Board);
