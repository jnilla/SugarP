"use client";

import TicketPage from "@/sugarp/pages/TicketPage";
import { Typography } from "@mui/material";
import React from "react";

export default function TicketByID({ params }) {
  const ticketID = params.id;

  return (
    <>
      <Typography variant='h2' gutterBottom>
        ID Ticket: {ticketID}
      </Typography>
      <TicketPage />
    </>
  );
}
