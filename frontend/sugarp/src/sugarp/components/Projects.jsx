import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import { useDispatch, useSelector } from "react-redux";
import { getExample } from "@/store/thunks";
import Loading from "./Loading";
import Link from "next/link";

const columns = [
  {
    field: "title",
    headerName: "Title",
    width: 130,
    sortable: false,
    renderCell: (params) => (
      <Link href={`projects/${params.row.id}`}>{params.row.title}</Link>
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 130,
    sortable: false,
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
    sortable: false,
  },
  { field: "id", type: "number", headerName: "ID", width: 70, sortable: false },
];

const rows = [
  { id: 1, description: "Snow", title: "Jon", status: "active" },
  { id: 2, description: "Lannister", title: "Cersei", status: "active" },
  { id: 3, description: "Lannister", title: "Jaime", status: "active" },
  { id: 4, description: "Stark", title: "Arya", status: "active" },
  { id: 5, description: "Targaryen", title: "Daenerys", status: "active" },
  { id: 6, description: "Melisandre", title: "Arya", status: "active" },
  { id: 7, description: "Clifford", title: "Ferrara", status: "active" },
  { id: 8, description: "Frances", title: "Rossini", status: "active" },
  { id: 9, description: "Roxie", title: "Harvey", status: "active" },
];

export default function Projects({ children }) {
  //* Hook para cargar stados de la api
  const { isLoading, isSuccess } = useGetExampleGetQuery();

  //* Obtener datos del store
  const { example: dataProjects } = useSelector((state) => state.sugarp);

  //*   Mapear los datos de la api
  // const mappedProjects = dataProjects.map((project) => ({
  //   id: "0",
  //   title: project.name,
  //   description: project.url,
  //   status: "ACTIVE",
  // }));

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      disableRowSelectionOnClick
      disableDensitySelector
      disableColumnSelector
      disableColumnFilter
      disableColumnMenu
      disableVirtualization
      filterPanelDeleteIcon
      autoHeight
      hideFooter
      columnVisibilityModel
    />
  );
}
