import { useTheme } from "@mui/material/styles";
import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInputsState } from "../hooks/useInputsState";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//* Configuracion de ReactQuill
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

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
  const [allData, setAllData] = useState({});
  const [note, setNote] = useState("");
  const { state, handleChange, handleChangeMultiElement } = useInputsState({
    status: "",
    title: "",
    Note: "",
    members: [],
  });

  //* Agregar el contenido del Editor para completar la data
  useEffect(() => {
    setAllData({
      ...state,
      note: `${note}`,
    });
  }, [state, note]);

  useEffect(() => {
    console.log(allData);
  }, [state, note]);

  return (
    <Grid container spacing='1rem'>
      <Grid item xs={6}>
        <FormControl sx={{ maxWidth: "720px", marginBottom: "1rem" }} fullWidth>
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
          sx={{ maxWidth: "720px", marginBottom: "1rem" }}
          label='Title'
          variant='outlined'
          value={state.title}
          onChange={handleChange}
          name='title'
        />

        <Box sx={{ maxWidth: "720px", marginBottom: "1rem" }} fullWidth>
          <ReactQuill
            theme='snow'
            value={note}
            onChange={setNote}
            name='note'
            modules={modules}
            formats={formats}
            placeholder='Write your note here...'
            style={{ height: "300px" }}
          />
        </Box>
      </Grid>

      <Grid item xs={6}>
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
      </Grid>
    </Grid>
  );
}
