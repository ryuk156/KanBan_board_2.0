import React from "react";
import { Paper, Typography, Button, InputBase } from "@material-ui/core";

function Login() {
  return (
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <h2>KANBAN BOARD</h2>
            </Typography>
            <hr></hr>

            <Typography style={{ paddingTop: "10px" }}>Email</Typography>
            <InputBase
              style={{
                border: "0.5px solid lightgrey ",
                width: "90%",
                margin: "8px",
              }}
            />

            <Typography>Password</Typography>
            <InputBase
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
            >
              Create Your Kanban Account
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Login;
