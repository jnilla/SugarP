import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Paper from "@mui/material/Paper";
import SaveAltRoundedIcon from "@mui/icons-material/SaveAltRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

export default function ControlForm({ children }) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "background.default",
        display: "flex",
        gap: 2,
        marginBottom: 2,
      }}
    >
      <LoadingButton
        loadingPosition='start'
        startIcon={<SaveAltRoundedIcon />}
        variant='contained'
        color='success'
      >
        Save
      </LoadingButton>
      <LoadingButton
        loadingPosition='start'
        startIcon={<SaveAltRoundedIcon />}
        variant='outlined'
        color='success'
      >
        Save and Close
      </LoadingButton>
      <LoadingButton
        loadingPosition='start'
        startIcon={<DeleteRoundedIcon />}
        variant='contained'
        color='error'
      >
        Delete
      </LoadingButton>
      <LoadingButton
        loadingPosition='start'
        startIcon={<ClearRoundedIcon />}
        variant='outlined'
        color='error'
      >
        Close
      </LoadingButton>
    </Paper>
  );
}
