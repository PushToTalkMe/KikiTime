import { Stack, Container, Box, Dialog } from "@mui/material/";
import { useState } from "react";
import { Header } from "./components/header";
import { ListFilms } from "./components/list_films";
import { Filter } from "./components/filter";
import { Context } from "./components/context";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Header open={open} setOpen={setOpen} />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          m: 2,
        }}
      >
        <Filter></Filter>
        <Context.Provider value={setOpen}>
          <ListFilms></ListFilms>
        </Context.Provider>
      </Stack>
    </Box>
  );
}

export { App };
