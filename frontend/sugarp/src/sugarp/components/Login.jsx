"use client";

import React, { useState, useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SugarpImg from "../../../public/sugarp.png";
import Image from "next/image";
import { useInputsState } from "../hooks/useInputsState";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import { useAuthStore } from "../hooks/useAuthStore";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { startLogin, status } = useAuthStore();

  const { state, handleChange } = useInputsState({
    username: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    startLogin(state);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Box
      component='main'
      id='main'
      width='100%'
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <Grid container spacing={4} sx={{ textAlign: "center" }} fullWidth>
        <Grid item xs={12}>
          <Image src={SugarpImg} alt='SugarP Logo' width={350} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Username'
            type='text'
            value={state.username}
            name='username'
            onChange={handleChange}
            fullWidth
            sx={{ maxWidth: "400px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Password'
            type='password'
            name='password'
            value={state.password}
            onChange={handleChange}
            fullWidth
            sx={{ maxWidth: "400px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={onSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
