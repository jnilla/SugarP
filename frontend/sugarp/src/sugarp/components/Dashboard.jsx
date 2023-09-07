import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Loading from "./Loading.jsx";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi.js";
import { useDispatch, useSelector } from "react-redux";
import { getExample } from "@/store/thunks.js";
import MediaCard from "./MediaCard.jsx";

export default function Dashboard() {
  // Obtener datos de la api
  const { data, error, isLoading, isSuccess } = useGetExampleGetQuery();
  const results = data?.results;

  // Dispatch para cargar datos al store
  const dispatch = useDispatch();

  //Cargar datos al store
  useEffect(() => {
    dispatch(getExample(results));
  }, [isSuccess, results, dispatch]);

  //Obtener datos del store
  const example = useSelector((state) => state.sugarp.example);

  return (
    <Box sx={{ display: "flex" }}>
      <div>
        <Alert severity='info' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          This app allows you to record, organize and prioritize incidents and
          user interaction.
        </Alert>

        <Typography variant='h6' component='h1' gutterBottom>
          PROJECTS LIST - SugarP APP
        </Typography>
        <Grid container rowSpacing={3} columnSpacing={3}>
          {isLoading ? (
            <Loading />
          ) : (
            example?.map((item) => (
              <Grid xs={6} key={item.id}>
                <MediaCard heading={item.name} text={item.url} />
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </Box>
  );
}
