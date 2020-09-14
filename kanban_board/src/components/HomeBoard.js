import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../action";
import BoardThumbnail from "./BoardThumbnail";
import Button from "@material-ui/core/Button";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 350px;
  height: 50px;

  font-size: 18px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const Home = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = (e) => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    setNewBoardTitle("");
  };

  const renderBoards = () => {
    return boardOrder.map((boardID) => {
      const board = boards[boardID];

      return (
        <div style={{ textAlign: "center" }}>
          <Link
            key={boardID}
            to={`/${board.id}`}
            style={{ textDecoration: "none", padding: "10px" }}
          >
            <BoardThumbnail {...board} bid={boardID} />
          </Link>
        </div>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <CreateInput
            onChange={handleChange}
            value={newBoardTitle}
            placeholder=" Title..."
            type="text"
          />
        </form>
        <Button
          onClick={handleSubmit}
          style={{
            color: "white",
            background: "#3b5998",
            width: "250px",
            height: "60px",
            margin: "20px",
          }}
        >
          + Create New Board
        </Button>
      </div>
    );
  };

  return (
    <HomeContainer>
      {renderCreateBoard()}
      <Thumbnails>{renderBoards()}</Thumbnails>
    </HomeContainer>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
  boardOrder: state.boardOrder,
});

export default connect(mapStateToProps)(Home);
