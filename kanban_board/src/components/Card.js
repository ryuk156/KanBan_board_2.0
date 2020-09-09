import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Typography, CardContent } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import styled from "styled-components";
import Form from "./Form";
import { editCard } from "../action";
import { connect } from "react-redux";

const CardContainer = styled.div`
  margin-bottom: 0 0 8px 0;
  position: relative;
`;

const EditButton = styled(EditIcon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

function Cards({ text, id, listid, index, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = (e) => {
    console.log("clicked");
    setIsEditing(false);
  };

  const saveCard = (e) => {
    e.preventDefault();
    dispatch(editCard(id, listid, cardText));
    setIsEditing(false);
  };

  const renderEditForm = () => {
    return (
      <Form
        text={cardText}
        setText={setText}
        closeForm={closeForm}
        actionButtonClicked={saveCard}
      />
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
              <EditButton fontSize="small" />
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
}

export default connect()(Cards);
