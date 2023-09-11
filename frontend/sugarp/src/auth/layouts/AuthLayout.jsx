import { Footer } from "@/dashboard/ui";
import { Box, Toolbar, Grid, Typography, Paper } from "@mui/material";
import Head from "next/head";
import { Header } from "../ui/Header";

export const Layout = ({ title = "Juno", children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Box component='main'>
        <Toolbar />
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          className='container-background'
          sx={{
            minHeight: "100vh",
            padding: 4,
          }}
        >
          <Grid
            item
            className='box-shadow'
            xs={3}
            sx={{
              width: { sm: 450 },
              backgroundColor: "white",
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Paper sx={{ p: "1rem" }}>
              <Typography variant='h5' sx={{ mb: 1 }}>
                {title}
              </Typography>
              {children}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer backgroundColor='white' />
    </Box>
  );
};
