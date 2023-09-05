import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function UserForm() {
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

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
      />
      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Username'
        variant='outlined'
      />
      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Password'
        variant='outlined'
      />
      <FormControl sx={{ maxWidth: "720px" }} fullWidth>
        <InputLabel id='demo-simple-select-label'>Role</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={role}
          label='Role'
          onChange={handleChange}
          defaultValue='Role'
        >
          <MenuItem value='admin'>Admin</MenuItem>
          <MenuItem value='manager'>Manager</MenuItem>
          <MenuItem value='developer'>Developer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
