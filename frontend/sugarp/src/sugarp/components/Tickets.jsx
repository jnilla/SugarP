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
      <Link href={`tickets/${params.row.id}`}>{params.row.title}</Link>
    ),
  },
  {
    field: "assignee",
    headerName: "Assignee",
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
  { id: 1, assignee: "Snow", title: "Jon", status: "active" },
  { id: 2, assignee: "Lannister", title: "Cersei", status: "active" },
  { id: 3, assignee: "Lannister", title: "Jaime", status: "active" },
  { id: 4, assignee: "Stark", title: "Arya", status: "active" },
  { id: 5, assignee: "Targaryen", title: "Daenerys", status: "active" },
  { id: 6, assignee: "Melisandre", title: "Arya", status: "active" },
  { id: 7, assignee: "Clifford", title: "Ferrara", status: "active" },
  { id: 8, assignee: "Frances", title: "Rossini", status: "active" },
  { id: 9, assignee: "Roxie", title: "Harvey", status: "active" },
];

export default function Tickets() {
  //* Hook para cargar stados de la api
  const { isLoading, isSuccess } = useGetExampleGetQuery();

  //* Obtener datos del store
  const { example: dataProjects } = useSelector((state) => state.sugarp);

  //*   Mapear los datos de la api
  // const mappedProjects = dataProjects.map((project) => ({
  //   id: "0",
  //   title: project.name,
  //   assignee: project.url,
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
