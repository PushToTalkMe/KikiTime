import React from "react";
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataListGenres } from "../data/data_list_genres";

import { useTypedSelector } from "../hooks/use_typed_selector";
import { Link } from "react-router-dom";

function Search() {
  const films = useTypedSelector((state) => state.listFilmsReducer);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);

  const nameGenres = () => {
    const ids = dataListGenres.map((genreOfList) => {
      if (
        films.searchFilms[index].genre_ids.some(
          (id: any) => id === genreOfList.id
        )
      ) {
        return genreOfList.name;
      }
    });
    return ids.filter((name) => name !== undefined);
  };

  return (
    <Stack sx={{ alignItems: "center" }}>
      <FormControl sx={{ mt: "10px", width: "50%" }}>
        <InputLabel id="genre">Жанр</InputLabel>
        <Select
          labelId="genre"
          label="Жанр"
          value={films.filter.genre}
          onChange={(e) => {
            const currentGenre = e.target.value;
            dispatch({ type: "ADD_GENRE", payload: currentGenre });
            dispatch({ type: "FILTER_SEARCH" });
          }}
        >
          {dataListGenres.map((genre, index) => (
            <MenuItem key={index} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ mt: "10px", width: "50%" }}>
        <InputLabel id="vote">Оценка</InputLabel>
        <Select
          labelId="vote"
          label="Оценка"
          value={films.filter.vote}
          onChange={(e) => {
            const currentVote = e.target.value;
            dispatch({ type: "ADD_VOTE", payload: currentVote });
            dispatch({ type: "FILTER_SEARCH" });
          }}
        >
          <MenuItem key={0} value={"HIGH"}>
            Высокая
          </MenuItem>
          <MenuItem key={1} value={"LOW"}>
            Низкая
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ mt: "10px", width: "50%" }}>
        <InputLabel id="popularity">Популярность</InputLabel>
        <Select
          labelId="popularity"
          label="Популярность"
          value={films.filter.popularity}
          onChange={(e) => {
            const currentPopularity = e.target.value;
            dispatch({ type: "ADD_POPULARITY", payload: currentPopularity });
            dispatch({ type: "FILTER_SEARCH" });
          }}
        >
          <MenuItem key={0} value={"POPULAR"}>
            Популярный
          </MenuItem>
          <MenuItem key={1} value={"UNKNOWN"}>
            Неизвестный
          </MenuItem>
        </Select>
      </FormControl>
      {films.filter.genre && films.filter.vote && films.filter.popularity ? (
        films.searchFilms.length !== 0 &&
        films.searchFilms.length - 1 !== index ? (
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "75%",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "40px",
                width: "100%",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${films.searchFilms[index].poster_path}`}
                alt="poster"
                style={{
                  width: "400px",
                  padding: "20px",
                }}
              />
              <Stack sx={{ padding: "50px", width: "50%" }}>
                <Typography variant="h2">
                  {films.searchFilms[index].title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Жанры:
                  {nameGenres().map((name, index) =>
                    index + 1 === nameGenres().length ? (
                      <Typography
                        sx={{ padding: "2px", mt: "3px" }}
                        key={index}
                      >
                        {name}.
                      </Typography>
                    ) : (
                      <Typography
                        sx={{ padding: "2px", mt: "3px" }}
                        key={index}
                      >
                        {name},
                      </Typography>
                    )
                  )}
                </Typography>
                <Typography variant="body1">
                  {films.searchFilms[index].overview}
                </Typography>
                <Box sx={{ mt: "20px" }}>
                  <Link
                    onClick={() => {
                      dispatch({
                        type: "ADD_FILM",
                        payload: films.searchFilms[index].id,
                      });
                    }}
                    to={`/KikiTime/${films.searchFilms[index].id}`}
                  >
                    <Button variant="outlined" sx={{ width: "48%", mt: "5px" }}>
                      Подробнее
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    sx={{ width: "48%", margin: "5px 0px 0px 5px" }}
                    onClick={() => {
                      setIndex(index + 1);
                    }}
                  >
                    Далее
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        ) : (
          <Typography variant="h5" sx={{ mt: "10px", textAlign: "center" }}>
            К сожалению, фильм с данными параметрами не найден.
          </Typography>
        )
      ) : (
        <Typography variant="h5" sx={{ mt: "10px", textAlign: "center" }}>
          Выберите жанр, оценку и популярность, и тогда предложим вам фильм,
          который соотвествует вашим желаниям!
        </Typography>
      )}
    </Stack>
  );
}
export { Search };
