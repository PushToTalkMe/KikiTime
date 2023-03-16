import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { dataListGenres } from "../data/data_list_genres";
import { releaseYear, valueOfSort } from "../data/consts";
import { useDispatch } from "react-redux";
import { cardsPerPage } from "../data/consts";
import { useTypedSelector } from "../hooks/use_typed_selector";

function Filter() {
  const listFilms = useTypedSelector((state) => state.listFilmsReducer);
  const totalPages = Math.ceil(listFilms.currentFilms.length / cardsPerPage);

  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "10px",
        width: "18%",
        height: "20%",
        padding: 1,
      }}
    >
      <Typography variant="h4" sx={{ padding: "5px 0" }}>
        Фильтры:
      </Typography>
      <FormControl sx={{ width: "90%" }}>
        <InputLabel id="sortBy">Сортировать по</InputLabel>
        <Select
          labelId="sortBy"
          label="Сортировать по"
          value={listFilms.filter.sortBy}
          onChange={(e) => {
            const currentSortBy = e.target.value;
            dispatch({ type: "ADD_SORT", payload: currentSortBy });
            dispatch({ type: "FILTER" });
          }}
        >
          {valueOfSort.map((sortBy, index) => (
            <MenuItem key={index} value={sortBy[0]}>
              {sortBy[1]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "90%", mt: "10px" }}>
        <InputLabel id="year">Год выхода</InputLabel>
        <Select
          labelId="year"
          label="Год выхода"
          value={listFilms.filter.year}
          onChange={(e) => {
            const currentYear = +e.target.value;
            dispatch({ type: "ADD_YEAR", payload: currentYear });
            dispatch({ type: "FILTER" });
          }}
        >
          {releaseYear.map((year, index) => (
            <MenuItem key={index} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormGroup
        sx={{
          margin: "10px 0",
          alignItems: "start",
        }}
      >
        {dataListGenres.map((genre) => (
          <FormControlLabel
            key={genre.id}
            control={
              <Checkbox
                size="small"
                onChange={() => {
                  if (!listFilms.filter.genres.includes(genre.id)) {
                    dispatch({ type: "ADD_GENRES", payload: genre.id });
                    dispatch({ type: "FILTER" });
                  } else {
                    dispatch({ type: "DELETE_GENRES", payload: genre.id });
                    dispatch({ type: "FILTER" });
                  }
                }}
              />
            }
            label={genre.name}
          />
        ))}
      </FormGroup>
      <Pagination
        count={totalPages}
        siblingCount={0}
        boundaryCount={1}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          dispatch({ type: "ADD_CURRENT_PAGE", payload: value });
        }}
      />
    </Box>
  );
}

export { Filter };
