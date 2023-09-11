"use client";

import ProjectPage from "@/sugarp/pages/ProjectPage";
import { Typography } from "@mui/material";
import React from "react";

export default function ProjectByID({ params }) {
  const projectID = params.id;

  return (
    <>
      <Typography variant='h2' gutterBottom>
        ID Project: {projectID}
      </Typography>
      <ProjectPage />
    </>
  );
}
