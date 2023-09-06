"use client";

import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import { DataGrid } from "@mui/x-data-grid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Users() {
  const { data: session, status } = useSession();
  console.log(session);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 130,
      sortable: false,
      renderCell: (params) => (
        <Link href={`users/${params.row.id}`}>{params.row.name}</Link>
      ),
    },
    {
      field: "username",
      headerName: "Username",
      width: 130,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      sortable: false,
    },
    {
      field: "id",
      type: "number",
      headerName: "ID",
      width: 70,
      sortable: false,
    },
  ];

  const rows = [
    { id: 1, username: "Snow", name: "Jon", status: "active" },
    { id: 2, username: "Lannister", name: "Cersei", status: "active" },
    { id: 3, username: "Lannister", name: "Jaime", status: "active" },
    { id: 4, username: "Stark", name: "Arya", status: "active" },
    { id: 5, username: "Targaryen", name: "Daenerys", status: "active" },
    { id: 6, username: "Melisandre", name: "Arya", status: "active" },
    { id: 7, username: "Clifford", name: "Ferrara", status: "active" },
    { id: 8, username: "Frances", name: "Rossini", status: "active" },
    { id: 9, username: "Roxie", name: "Harvey", status: "active" },
  ];

  //* Hook para cargar stados de la api
  const { isLoading, isSuccess } = useGetExampleGetQuery();

  //* Obtener datos del store
  const { example: dataProjects } = useSelector((state) => state.sugarp);

  //*   Mapear los datos de la api
  // const mappedProjects = dataProjects.map((project) => ({
  //   id: "0",
  //   name: project.name,
  //   username: project.url,
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
