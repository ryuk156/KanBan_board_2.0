import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Typography, CardContent } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import styled from "styled-components";
import Form from "./Form";
import NewButton from "./NewButton";
import { editCard } from "../action";
import { connect } from "react-redux";

const Cards = React.memo(({ text, id, listid, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const CardContainer = styled.div`
    margin-bottom: 8px;
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
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
