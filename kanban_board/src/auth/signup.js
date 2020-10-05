import React, { useEffect } from "react";
import { Paper, Typography, Button, InputBase } from "@material-ui/core";
import axios from "axios";
import qs from 'qs';

function Signup() {

  const signUpUser = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    (e.target.password.value == e.target.Againpassword.value) ?
    (postReq(e.target.email.value, e.target.password.value)) :
    (alert("Password Does not match"))
    
  }

  const postReq = (email, password) => {
      // send a POST request
    const data = { 
        email : email,
        password : password
      } ;
      const options = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded' 
        }
      };
      axios.post('http://localhost:3001/Signup', qs.stringify(data) , options)
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
      <form onSubmit={signUpUser}>
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

              <Typography>Enter Again Password</Typography>
              <InputBase id="Againpassword"
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
                  type='submit' value='signup'
                />
              </Button>

              
            </div>
          </Paper>
        </div>
      </form>
    </div>
  );
}

export default Signup;
