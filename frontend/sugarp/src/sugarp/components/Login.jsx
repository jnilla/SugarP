"use client";

import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import SugarpImg from "../../../public/sugarp.png";
import Image from "next/image";
import { useInputsState } from "../hooks/useInputsState";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const { data: session, status } = useSession();
  console.log(status);

  const { state, handleChange } = useInputsState({
    username: "",
    password: "",
    redirect: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", state);
      console.log(res);

      if (res.error) return setError(res.error);
      if (res.ok) return router.push("/");
    } catch (error) {
      console.log(error);
    }
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
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
