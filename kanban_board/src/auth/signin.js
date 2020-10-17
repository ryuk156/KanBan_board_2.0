import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Paper, Typography, Button, InputBase } from "@material-ui/core";

class signin extends Component {
    state={
        email:"",
        password:""
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
       
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                signin
                <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
      }}
    >
        <form onSubmit={this.handleSubmit}>
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
            <input type="email"
            id="email"
              style={{
                border: "0.5px solid lightgrey ",
                width: "90%",
                margin: "8px",
              }}

            onChange={this.handleChange}
            />

            <Typography>Password</Typography>
            <input id="password" type="password"
              style={{
                border: "0.5px solid lightgrey",
                width: "90%",
                margin: "8px",
              }}

              onChange={this.handleChange}
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
              type="submit"
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
                <Link to={`/signup`} >
              Create Your Kanban Account
              </Link>
            </Button>
          </div>
        </Paper>
      </div>
      </form>
    </div>
            </div>
        )
    }
}

export default signin

