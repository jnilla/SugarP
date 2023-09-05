import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInputsState } from "../hooks/useInputsState";

export default function UserForm() {
  //* Manejador de 'state'
  const { state, handleChange } = useInputsState({
    name: "",
    username: "",
    password: "",
    role: "",
  });

  //* DEBUG
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Box
      sx={{
        p: 0,
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: 2,
      }}
    >
      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Name'
        variant='outlined'
        value={state.name}
        onChange={handleChange}
        name='name'
      />
      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Username'
        variant='outlined'
        value={state.username}
        onChange={handleChange}
        name='username'
      />
      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Password'
        variant='outlined'
        value={state.password}
        type='password'
        onChange={handleChange}
        name='password'
      />
      <FormControl sx={{ maxWidth: "720px" }} fullWidth>
        <InputLabel id='demo-simple-select-label'>Role</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={state.role}
          label='Role'
          defaultValue='Role'
          onChange={handleChange}
          name='role'
        >
          <MenuItem value='admin'>Admin</MenuItem>
          <MenuItem value='manager'>Manager</MenuItem>
          <MenuItem value='developer'>Developer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
