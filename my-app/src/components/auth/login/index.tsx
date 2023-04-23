import React from "react";
// import style from './style.module.css'
import { TextField, Button, Typography } from "@mui/material";
const LoginPage = () => {
  return (
    <>
      <Typography variant="h2" fontFamily="Popins" textAlign="center">
        Authorization
      </Typography>

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
      <Button
        sx={{
          fontFamily: "Popins",
          marginTop: 2,
          width: "60%",
          marginBottom: 2,
        }}
        variant="contained"
      >
        Login
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Popins" }}>
        You don't have a account? <span className="incitingText">Register</span>
      </Typography>
    </>
  );
};

export default LoginPage;
