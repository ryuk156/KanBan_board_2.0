import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Typography, CardContent } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import Form from "./Form";
import NewButton from "./NewButton";
import { editCard, deleteCard } from "../action";
import { connect } from "react-redux";
import Datepicker from './Datepicker.js'

const CardContainer = styled.div`
  margin-bottom: 8px;
  position: relative;
  max-width: 300px;
  word-wrap: break-word;
  border-left: 5px solid #3b5998 ;
`;

const EditButton = styled(EditIcon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(DeleteIcon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 1;
  }
`;

const Cards = React.memo(({ text, id, listid, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveCard = (e) => {
    e.preventDefault();
    dispatch(editCard(id, listid, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = (e) => {
    dispatch(deleteCard(id, listid));
  };

  const renderEditForm = () => {
    return (
      <Form text={cardText} onChange={handleChange} closeForm={closeForm}>
        <NewButton onClick={saveCard}>Save</NewButton>
      </Form>
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <CardContainer
           
          
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <EditButton
                fontSize="small"
                onMouseDown={() => setIsEditing(true)}
              />
              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard} />

              <CardContent>
                <Typography>{text}</Typography>
               
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(Cards);
