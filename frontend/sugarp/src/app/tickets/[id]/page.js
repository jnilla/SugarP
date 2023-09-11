"use client";

import WithPrivateRoute from "@/auth/components/WithPrivateRoute";
import { useAuthStore } from "@/sugarp/hooks/useAuthStore";
import TicketPage from "@/sugarp/pages/TicketPage";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TicketByID({ params }) {
  const ticketID = params.id;

  //Se toma el valor de status del state
  const { status } = useSelector((state) => state.auth);
  const { checkAuthToken } = useAuthStore();

  //UseEffect para revalidar cuenta de usuario
  useEffect(() => {
    checkAuthToken();
  }, []);

  //Si el estado es checking crea un spiner
  if (status === "checking") {
    return <CheckingAuth />;
    //Retorna la page si el usuario esta authenticated
  }

  return (
    <>
      {status === "authenticated" && (
        <>
          <Typography variant='h2' gutterBottom>
            ID Ticket: {ticketID}
          </Typography>
          <TicketPage />
        </>
      )}
    </>
  );
}

TicketByID.Auth = WithPrivateRoute;
