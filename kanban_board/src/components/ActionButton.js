import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { addList, addCard } from "../action";
import styled from "styled-components";
import OpenForm from "./OpenForm";
import NewButton from "./NewButton";
import Form from "./Form";

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

  handleInputChange = (e) => {
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

    const buttonText = list ? "+ Add another list" : "+ Add another card";
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

  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <Form
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <NewButton
          onClick={list ? this.handlelistsubmit : this.handlecardsubmit}
        >
          {list ? "Add List" : "Add Card"}
        </NewButton>
      </Form>
    ) : (
      <OpenForm list={list} onClick={this.openForm}>
        {list ? "+ Add another list" : "+ Add another card"}
      </OpenForm>
    );
  }
}

export default connect()(ActionButton);