import { useState } from "react";
import { Stack, Box, Typography } from "@mui/material/";
import { Header } from "./components/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ListFilms } from "./components/list_films";
import { Filter } from "./components/filter";
import { Film } from "./components/film";
import { Context } from "./context";
import { Search } from "./components/search";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <Box>
        <Header open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/KikiTime/:id" element={<Film />}></Route>
          <Route path="/KikiTime/search" element={<Search />}></Route>
          <Route
            path="/KikiTime/"
            element={
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
            }
          ></Route>
        </Routes>
      </Box>
    </Router>
  );
}

export { App };
