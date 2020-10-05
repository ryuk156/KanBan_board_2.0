import React, { useEffect } from "react";
import { Paper, Typography, Button, InputBase } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import axios from "axios";
import qs from 'qs';

function Login() {

  const signInUser = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    // send a POST request
    const data = { 
      email : e.target.email.value,
      password : e.target.password.value
    } ;
    const options = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded' 
      }
    };
    axios.post('http://localhost:3001/signin', qs.stringify(data) , options)
    .then((response) => {
      if(response.data){
        alert("Successful!");
      } else {
        alert(" Failed!");
      }
      
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <form onSubmit={signInUser}>
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
              <InputBase id="email"
                style={{
                  border: "0.5px solid lightgrey ",
                  width: "90%",
                  margin: "8px",
                }}
              />

              <Typography>Password</Typography>
              <InputBase id="password"
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
              <Button style={{
                color: "white",
                backgroundColor: "#3b5998",
                width: "90%",
                margin: "8px",
              }} elevation={3} >
                <input style={{ backgroundColor: "Transparent" }}
                  type='submit' value='signin'
                />
              </Button>

              <NavLink to={`/Signup`}>           
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
            </NavLink>
            </div>
          </Paper>
        </div>
      </form>
    </div>
  );
}

export default Login;
