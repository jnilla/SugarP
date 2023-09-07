import React, { useEffect } from "react";
import Users from "../components/Users";
import Paginator from "../components/Paginator";
import Loading from "../components/Loading";
import ControlBar from "../components/ControlBar";
import { Typography } from "@mui/material";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import { useDispatch } from "react-redux";
import { getExample } from "@/store/thunks";

export default function UsersPage() {
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
      <Typography variant='h2' gutterBottom>
        Users
      </Typography>
      <ControlBar />

      <Users />
      <Paginator />
    </>
  );
}
