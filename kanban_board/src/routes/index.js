import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Board from "../components/Board";
import Home from "../components/HomeBoard";
import Navbar from "../components/Navbar";
import HomeBanner from "../components/HomeBanner";
import Login from "../auth/Login";
const AppRouter = () => {
  return (
    <div style={{ margin: "0px" }}>
      <Router>
        <Navbar />
        <Route path="/" exact component={HomeBanner} />
        <Route path="/Login" component={Login} />
        <Route path="/createboard" component={Home} />
        <Route path="/board/:boardID" component={Board} />
      </Router>
    </div>
  );
};

export default AppRouter;
