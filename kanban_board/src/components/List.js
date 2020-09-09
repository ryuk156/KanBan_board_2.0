import React from "react";
import Cards from "./Card";

import ActionButton from "./ActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 0 8px 0 0;
`;

function List({ title, cards, listid, index }) {
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
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h1>{title}</h1>

                {cards.map((card, index) => {
                  return (
                    <Cards
                      text={card.text}
                      key={card.id}
                      id={card.id}
                      index={index}
                      listid={listid}
                    />
                  );
                })}
                {provided.placeholder}
                <ActionButton card listid={listid} />
              </div>
            )}
          </Droppable>
          ;
        </ListContainer>
      )}
    </Draggable>
  );
}

export default List;
