import React, { useEffect } from "react";
import ControlBar from "../components/ControlBar";
import { Typography } from "@mui/material";
import Tickets from "../components/Tickets";
import Paginator from "../components/Paginator";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import { useDispatch } from "react-redux";
import { getExample } from "@/store/thunks";
import Loading from "../components/Loading";

export default function TicketsPage() {
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
        Tickets
      </Typography>
      <ControlBar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Tickets />
          <Paginator />
        </>
      )}
    </>
  );
}
