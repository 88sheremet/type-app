import React from 'react'
// import style from './style.module.css'
import { TextField, Button, Typography } from "@mui/material";

const RegisterPage = ()=>{
   
    return (
        <>
        <Typography variant="h2" fontFamily="Popins" textAlign="center">
          Registration
        </Typography>
  
        <TextField
          fullWidth={true}
          label="Name"
          variant="outlined"
          margin="normal"
          placeholder="Enter your name"
        />
        <TextField
          fullWidth={true}
          label="User Name"
          variant="outlined"
          margin="normal"
          placeholder="Enter your Username"
        />
        <TextField
          fullWidth={true}
          label="Email"
          variant="outlined"
          margin="normal"
          placeholder="Enter your email"
        />
        <TextField
          fullWidth={true}
          type='password'
          label="Password"
          variant="outlined"
          margin="normal"
          placeholder="Enter your password"
        />
         <TextField
          fullWidth={true}
          type='password'
          label="Repeat password"
          variant="outlined"
          margin="normal"
          placeholder="Repeat your password"
        />
        <Button
          sx={{
            fontFamily: "Popins",
            marginTop: 2,
            width: "60%",
            marginBottom: 2,
          }}
          variant="contained"
        >
          Register
        </Button>
        <Typography variant="body1" sx={{ fontFamily: "Popins" }}>
          You don't have a account? <span className="incitingText">Login</span>
        </Typography>
      </>
    )
} 

export default RegisterPage;