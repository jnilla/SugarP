"use client";
import { useAuthStore } from "@/sugarp/hooks/useAuthStore";
import DashboardPage from "@/sugarp/pages/DashboardPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import WithPrivateRoute from "@/auth/components/WithPrivateRoute";
import { CheckingAuth } from "@/auth/ui/CheckingAuth";

export default function Home() {
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
  return <>{status === "authenticated" && <DashboardPage />}</>;
}

//Se protege la ruta con WithPrivateRoute
Home.Auth = WithPrivateRoute;
