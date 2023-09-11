"use client";

import React, { useEffect } from "react";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import { useDispatch } from "react-redux";
import { getExample } from "@/store/thunks";
import Loading from "../components/Loading";
import ControlForm from "../components/ControlForm";
import ProjectForm from "../components/ProjectForm";
import Login from "../components/Login";

export default function LoginPage() {
  //* Obtener datos de la API
  const { data, error, isLoading, isSuccess } = useGetExampleGetQuery();
  const dataProjects = data?.results;

  //* Dispatch para cargar datos al store
  const dispatch = useDispatch();

  //* Cargar datos al store
  useEffect(() => {
    dispatch(getExample(dataProjects));
  }, [isSuccess]);

  return <Login />;
}
