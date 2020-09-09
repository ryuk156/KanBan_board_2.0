import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const NewButton = ({ children, onClick }) => {
  const StyledButton = styled(Button)`
    && {
      color: white;
      background: #5aac44;
    }
  `;

  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default NewButton;
