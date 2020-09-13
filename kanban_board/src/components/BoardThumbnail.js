import React from "react";
import styled from "styled-components";

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
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
  word-wrap: break-word;
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 180px;
  overflow: hidden !important;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
