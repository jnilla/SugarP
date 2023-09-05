import React from "react";
import ControlBar from "../components/ControlBar";
import { Typography } from "@mui/material";
import Tickets from "../components/Tickets";

export default function TicketsPage() {
  return (
    <>
      <Typography variant='h2' gutterBottom>
        Projects
      </Typography>
      <ControlBar />
      <Tickets />
    </>
  );
}
