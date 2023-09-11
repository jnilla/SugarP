"use client";
import WithPrivateRoute from "@/auth/components/WithPrivateRoute";
import { CheckingAuth } from "@/auth/ui/CheckingAuth";
import { useAuthStore } from "@/sugarp/hooks/useAuthStore";
import UsersPage from "@/sugarp/pages/UsersPage";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Users() {
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
  }

  //Retorna la page si el usuario esta authenticated
  return <>{status === "authenticated" && <UsersPage />}</>;
}
Users.Auth = WithPrivateRoute;
