import { Stack, Container, Box, Dialog } from "@mui/material/";
import { useState } from "react";
import { Auth } from "./components/auth";
import { Header } from "./components/header";
import { ListFilms } from "./components/list_films";
import { Filter } from "./components/filter";
function App() {
  return (
    <Box>
      <Header />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          m: 2,
        }}
      >
        <Filter></Filter>
        <ListFilms></ListFilms>
      </Stack>
    </Box>
  );
}

export { App };
