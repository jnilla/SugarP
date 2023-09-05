"use client";

import TicketPage from "@/sugarp/pages/TicketPage";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import React from "react";

export default function TicketByID() {
  const params = useParams();
  const { id: ticketID } = params;

  //   console.log(router);
  //   console.log(pathname);
  //   console.log(searchParams);

  return (
    <>
      <Typography variant='h2' gutterBottom>
        ID Ticket: {ticketID}
      </Typography>
      <TicketPage />
    </>
  );
}
