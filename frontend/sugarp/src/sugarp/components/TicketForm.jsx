import { useTheme } from "@mui/material/styles";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInputsState } from "../hooks/useInputsState";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TicketForm() {
  //* Estilos
  const theme = useTheme();

  //* Manejador de 'state'
  const { state, handleChange, handleChangeMultiElement } = useInputsState({
    status: "",
    title: "",
    description: "",
    members: [],
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
      <FormControl sx={{ maxWidth: "720px" }} fullWidth>
        <InputLabel id='demo-simple-select-label'>Status</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={state.status}
          label='Status'
          onChange={handleChange}
          defaultValue='New'
          name='status'
        >
          <MenuItem value='new'>New</MenuItem>
          <MenuItem value='assigned'>Assigned</MenuItem>
          <MenuItem value='inprog'>In progress</MenuItem>
          <MenuItem value='pending'>Pending</MenuItem>
          <MenuItem value='resolved'>Resolved</MenuItem>
          <MenuItem value='closed'>Closed</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Title'
        variant='outlined'
        value={state.title}
        onChange={handleChange}
        name='title'
      />

      <TextField
        fullWidth
        sx={{ maxWidth: "720px" }}
        label='Description'
        value={state.description}
        onChange={handleChange}
        name='description'
        variant='outlined'
        multiline
        rows={4}
      />

      <FormControl sx={{ maxWidth: "720px" }} fullWidth>
        <InputLabel id='demo-multiple-chip-label'>Members</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          value={state.members}
          onChange={handleChangeMultiElement}
          name='members'
          input={<OutlinedInput id='select-multiple-chip' label='Members' />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, state.members, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
