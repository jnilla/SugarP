import React, { useEffect } from "react";
import Paginator from "../components/Paginator";
import Loading from "../components/Loading";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import { useDispatch } from "react-redux";
import { getExample } from "@/store/thunks";
import ControlForm from "../components/ControlForm";
import UserForm from "../components/UserForm";

export default function UserPage() {
  //* Obtener datos de la API
  const { data, error, isLoading, isSuccess } = useGetExampleGetQuery();
  const dataProjects = data?.results;

  //* Dispatch para cargar datos al store
  const dispatch = useDispatch();

  //* Cargar datos al store
  useEffect(() => {
    dispatch(getExample(dataProjects));
  }, [isSuccess]);

  return (
    <>
      <ControlForm />
      <UserForm />
    </>
  );
}
