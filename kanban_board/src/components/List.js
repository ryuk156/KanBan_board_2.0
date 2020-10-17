import React, { useState, useEffect } from "react";
import Cards from "./Card";
import { InputBase, Card } from "@material-ui/core";
import ActionButton from "./ActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { editTitle, deleteList } from "../action";

const ListContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 3px;
  width: auto;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
  border-top: 5px solid #3b5998;
  
`;

const StyledInput = styled(InputBase)`
  background-color: #fff;
  width: 300px;
  border: none;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;

const DeleteButton = styled(DeleteIcon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const ListTitle = styled.h3`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const List = ({ title, cards, listid, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <StyledInput
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = (e) => {
    console.log("hi");

    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = (e) => {
    setIsEditing(false);
    dispatch(editTitle(listid, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listid));
  };

  return (
    <Draggable draggableId={String(listid)} index={index}>
      {(provided) => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Droppable
            droppableId={String(listid)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            type="card"
          >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={{padding:"10px"}} >
                {isEditing ? (
                  renderEditInput()
                ) : (
                  <TitleContainer onClick={() => setIsEditing(true)}>
                    <ListTitle>{listTitle}</ListTitle>
                    <DeleteButton onClick={handleDeleteList} />
                  </TitleContainer>
                )}

                {provided.placeholder}
                <ActionButton card listid={listid} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default connect()(List);
