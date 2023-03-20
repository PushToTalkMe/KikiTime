import { Grid } from "@mui/material";
import { CardFilm } from "./card_film";
import { useTypedSelector } from "../hooks/use_typed_selector";

function ListFilms() {
  const listFilms = useTypedSelector((state) => state.listFilmsReducer);
  const currentPage = useTypedSelector((state) => state.currentPageReducer);
  const cardsPerPage = 12;

  const lastIndexFilm = currentPage * cardsPerPage;
  const firstIndexFilm = lastIndexFilm - cardsPerPage;
  const currentCards = listFilms.currentFilms.slice(
    firstIndexFilm,
    lastIndexFilm
  );

  return (
    <Grid container spacing={2}>
      {currentCards.map((film) => {
        return (
          <CardFilm
            key={film.id}
            id={film.id}
            poster={film.poster_path}
            title={film.title}
            vote={film.vote_average}
          />
        );
      })}
    </Grid>
  );
}

export { ListFilms };
