import React from "react";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBoard } from "../action";

const Thumbnail = styled.div`
  height: 100%;
  width: 280px;
  background: #3b5998;
  padding: 20px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  word-wrap: break-word;
`;

const Container = styled.div`
  margin: 10px;
  background: #3b5998;
  display: flex;
  box-shadow: 0 2px 4px grey;

  border-radius: 3px;
`;
const Title = styled.h4`
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 180px;
  overflow: hidden !important;
`;

const BoardThumbnail = ({ title, bid, dispatch }) => {
  const handledeleteboard = (e) => {
    dispatch(deleteBoard(bid));
  };
  
  return (
    <Container>
      <Thumbnail>
        <Title>{title}</Title>
      </Thumbnail>

      <Link to={`/`} style={{ textDecoration: "none", padding: "10px" }}>
        <DeleteIcon
          style={{ color: "white", marginTop: "5px" }}
          onMouseDown={handledeleteboard}
        />
      </Link>
    </Container>
  );
};

export default connect()(BoardThumbnail);
