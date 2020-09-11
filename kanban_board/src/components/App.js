import React, { PureComponent } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../action";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends PureComponent {
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
    const { lists, listOrder, cards } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h1>KANBAN BOARD</h1>
          <hr></hr>
          <Droppable droppableId="all-list" direction="horizontal" type="list">
            {(provided) => (
              <ListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((listid, index) => {
                  const list = lists[listid];
                  if (list) {
                    const listCards = list.cards.map((cardid) => cards[cardid]);

                    return (
                      <List
                        listid={list.id}
                        title={list.title}
                        key={list.id}
                        cards={listCards}
                        index={index}
                      />
                    );
                  }
                })}
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

const mapToProps = (state) => ({
  lists: state.lists,
  listOrder: state.listOrder,
  cards: state.cards,
});

export default connect(mapToProps)(App);
