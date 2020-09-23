import React, { PureComponent } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort, setActiveBoard } from "../action";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class Board extends PureComponent {
  componentDidMount() {
    // set active trello board here
    const { boardID } = this.props.match.params;

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
    const board = boards[boardID];
    if (!board) {
      return <p>Board not found</p>;
    }
    const listOrder = board.lists;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App" style={{ padding: "20px" }}>
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
  cards: state.cards,
  boards: state.boards,
});

export default connect(mapToProps)(Board);
