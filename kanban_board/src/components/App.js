import React, { Component } from "react";
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        hello
        <div style={style.container}>
          {lists.map((list) => {
            return <List title={list.title} key={list.id} cards={list.cards} />;
          })}
          <ActionButton list />
        </div>
      </div>
    );
  }
}
const style = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
};

const mapToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapToProps)(App);
