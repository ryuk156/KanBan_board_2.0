import React, { PureComponent } from "react";
import Board from "./Board";

import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../action";
import styled from "styled-components";
import Routes from "../routes";

class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;
