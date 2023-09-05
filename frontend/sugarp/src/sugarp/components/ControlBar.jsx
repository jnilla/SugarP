import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";

export default function ControlBar({ children }) {
  return (
    <Paper
      sx={{
        p: 2,
        bgcolor: "background.default",
        gap: 2,
        marginBottom: 2,
      }}
    >
      <LoadingButton
        loadingPosition='start'
        startIcon={<AddIcon />}
        variant='contained'
        color='success'
      >
        Save
      </LoadingButton>
    </Paper>
  );
}
