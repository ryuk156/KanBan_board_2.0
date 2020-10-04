import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  InputBase,
  Snackbar,
} from "@material-ui/core";
import firebaseApp from "../config/config";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = () => {
  const history = useHistory();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);

  const onChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAlert = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(userInput.email, userInput.password);
      setInfo({
        type: "success",
        msg: "Successfully signed in",
      });
      handleAlert();
    } catch (err) {
      setInfo({
        type: "error",
        msg: err.code,
      });
      handleAlert();
      // Handle Route Change;
      // history.push("/*Some Route*/")
    }
    setUserInput({
      email: "",
      password: "",
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(userInput.email, userInput.password);
      setInfo({
        type: "success",
        msg: "Successfully signed up. You can sign in now",
      });
      handleAlert();
    } catch (err) {
      setInfo({
        type: "error",
        msg: err.code,
      });
      handleAlert();
    }
    setUserInput({
      email: "",
      password: "",
    });
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div style={{ width: "400px" }}>
          <Paper elevation={3}>
            <div style={{ padding: "20px" }}>
              <Typography
                variant="h4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                KANBAN BOARD
              </Typography>
              <hr></hr>

              <Typography style={{ paddingTop: "10px" }}>Email</Typography>
              <InputBase
                name="email"
                onChange={onChange}
                value={userInput.email}
                style={{
                  border: "0.5px solid lightgrey ",
                  width: "90%",
                  margin: "8px",
                }}
              />

              <Typography>Password</Typography>
              <InputBase
                name="password"
                onChange={onChange}
                value={userInput.password}
                style={{
                  border: "0.5px solid lightgrey",
                  width: "90%",
                  margin: "8px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleSignIn}
                style={{
                  color: "white",
                  backgroundColor: "#3b5998",
                  width: "90%",
                  margin: "8px",
                }}
                elevation={3}
              >
                Sign In
              </Button>
              <Button
                elevation={3}
                style={{
                  color: "white",
                  backgroundColor: "#3b5998",
                  width: "90%",
                  margin: "8px",
                }}
                onClick={handleSignUp}
              >
                Create Your Kanban Account
              </Button>
            </div>
          </Paper>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity={info && info.type}>{info && info.msg}</Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Login;
