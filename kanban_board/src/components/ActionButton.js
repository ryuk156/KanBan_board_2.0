import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { addList, addCard } from "../action";
import styled from "styled-components";

class ActionButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };
  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };
  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };

  handlechange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handlelistsubmit = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addList(text));
      this.setState({
        text: "",
      });
    }
    return null;
  };

  handlecardsubmit = () => {
    const { dispatch, listid } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addCard(listid, text));
      this.setState({
        text: "",
      });
    }
  };

  renderAddbutton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";

    const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={this.openForm}>
        <AddIcon />
        <p style={{ flexShrink: 0 }}> {buttonText}</p>
      </OpenFormButton>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter list title" : "Enter Title for card";
    const buttontitle = list ? "Add list" : "Add card";

    const Container = styled.div`
      width: ${list ? "300px" : "100%"};
    `;

    const StyledCard = styled(Card)`
      min-height: 85px;
      padding: 6px 8px 2px;
    `;

    const StyledTextArea = styled(Textarea)`
      resize: none;
      width: 100%;
      overflow: hidden;
      outline: none;
      border: none;
    `;

    const StyledButton = styled(Button)`
      && {
        color: white;
        background: #5aac44;
      }
    `;

    const ButtonContainer = styled.div`
      margin-top: 8px;
      display: flex;
      align-items: center;
      margin-left: 8px;
    `;

    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handlechange}
          />
        </StyledCard>
        <ButtonContainer>
          <StyledButton
            variant="contained"
            onMouseDown={list ? this.handlelistsubmit : this.handlecardsubmit}
            children={buttontitle}
          />

          <CloseIcon
            style={{ marginLeft: 8, cursor: "pointer" }}
            onClick={this.closeForm}
          />
        </ButtonContainer>
      </Container>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddbutton();
  }
}

export default connect()(ActionButton);
