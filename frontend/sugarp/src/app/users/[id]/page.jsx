"use client";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import React from "react";

export default function UserByID() {
  const params = useParams();
  const { id: UserID } = params;

  //   console.log(router);
  //   console.log(pathname);
  //   console.log(searchParams);

  return (
    <>
      <Typography variant='h2' gutterBottom>
        ID User: {UserID}
      </Typography>
      <UserPage />
    </>
  );
}
