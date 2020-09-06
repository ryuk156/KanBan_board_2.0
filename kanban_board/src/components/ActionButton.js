import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Card, Button } from "@material-ui/core";
import TextArea from "react-textarea-autosize";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { addList, addCard } from "../action";
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
      this.state.text = "";
    }
    return null;
  };

  handlecardsubmit = () => {
    const { dispatch, listid } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addCard(listid, text));
      this.state.text = "";
    }
  };

  renderAddbutton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";
    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <AddIcon />
        <p> {buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter list title" : "Enter Title for card";
    const buttontitle = list ? "Add list" : "Add card";

    return (
      <div>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handlechange}
            style={{
              overflow: "hidden",
              resize: "none",
              width: "100%",
              border: "none",
              outline: "none",
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            color="primary"
            style={{ color: "white" }}
            onMouseDown={list ? this.handlelistsubmit : this.handlecardsubmit}
          >
            {buttontitle}
          </Button>
          <CloseIcon style={{ marginLeft: 0, cursor: "pointer" }} />
        </div>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddbutton();
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
  },
};

export default connect()(ActionButton);
