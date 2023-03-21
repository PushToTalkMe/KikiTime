import React from "react";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { useState } from "react";
import { Box, Stack, Typography, Tabs, Tab } from "@mui/material";
import { format } from "date-fns";
import { TabPanel } from "./tab_panel";
function Film() {
  const film = useTypedSelector((state) => state.filmReducer);

  const [value, setValue] = useState(0);

  const backdrop = film.backdrop_path;
  const poster = film.poster_path;
  const title = film.title;
  const vote = film.vote_average;
  const overview = film.overview;
  const dateNow = format(new Date(), "yyyy-MM-dd");
  const dateRelease = film.release_date;
  const isRelease = dateNow < dateRelease ? "No released" : "Released";
  const language = film.original_language;

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "75%",
          margin: "0 auto",
          color: "white",
          background: "rgb(0, 0, 0, 0.7)",
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop}`}
          alt="backdrop"
          style={{
            position: "absolute",
            zIndex: "-1",
            backgroundSize: "cover",
            width: "100%",
            height: "75%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "40px",
            width: "100%",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt="poster"
            style={{
              width: "400px",
              padding: "20px",
            }}
          />
          <Stack sx={{ padding: "50px", width: "50%", color: "white" }}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h6">Рейтинг: {vote}</Typography>
            <p></p>
            <Typography variant="body1">{overview}</Typography>
          </Stack>
        </Box>
      </Stack>
      <Box>
        <Tabs
          value={value}
          onChange={(event: React.SyntheticEvent, newValue: number) => {
            console.log(newValue);
            setValue(newValue);
          }}
        >
          <Tab label="Детали" value={0}></Tab>
          <Tab label="Актеры" value={1}></Tab>
          <Tab label="Видео" value={2}></Tab>
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box>
            <Typography variant="h6">Статус</Typography>
            <Typography variant="body2">{isRelease}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Дата выхода</Typography>
            <Typography variant="body2">{dateRelease}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Язык оригинала</Typography>
            <Typography variant="body2">{language}</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Актеры
        </TabPanel>
        <TabPanel value={value} index={2}>
          Видео
        </TabPanel>
      </Box>
    </Box>
  );
}

export { Film };
