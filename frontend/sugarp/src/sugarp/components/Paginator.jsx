import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginator() {
  return (
    <Stack
      marginTop={2}
      spacing={2}
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      <Pagination count={10} variant='outlined' shape='rounded' />
    </Stack>
  );
}
