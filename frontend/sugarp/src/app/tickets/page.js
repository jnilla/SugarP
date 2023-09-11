"use client";
import WithPrivateRoute from "@/auth/components/WithPrivateRoute";
import { useAuthStore } from "@/sugarp/hooks/useAuthStore";
import TicketsPage from "@/sugarp/pages/TicketsPage";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Tickets() {
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
  return <>{status === "authenticated" && <TicketsPage />}</>;
}
Tickets.Auth = WithPrivateRoute;
