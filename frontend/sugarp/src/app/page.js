"use client";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExample } from "@/store/thunks";
import { useSelector } from "react-redux";
import { useGetExampleGetQuery } from "@/store/api/sugarpApi";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import MediaCard from "../sugarp/components/MediaCard.jsx";
import { Skeleton } from "@mui/material";

export default function Home() {
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
  console.log(example);

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
            <Grid container rowSpacing={3} columnSpacing={3}>
              <Grid xs={6}>
                <Skeleton variant='rectangular' width={640} height={345} />
              </Grid>
              <Grid xs={6}>
                <Skeleton variant='rectangular' width={640} height={345} />
              </Grid>
            </Grid>
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
