"use client";

import UserPage from "@/sugarp/pages/UserPage";
import { Typography } from "@mui/material";
import React from "react";

export default function UserByID({ params }) {
  const UserID = params.id;

  return (
    <>
      <Typography variant='h2' gutterBottom>
        ID User: {UserID}
      </Typography>
      <UserPage />
    </>
  );
}
