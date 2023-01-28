import React from "react";
import { CardFilm } from "./card_film/card_film";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import "./list_films.css";

interface ListFilmsProps {
  setAuthActive: (authActive: boolean) => void;
}

interface FilmProps {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
}

function ListFilms({ setAuthActive }: ListFilmsProps) {
  const listFilms = useTypedSelector((state) => state.listFilmsReducer);
  const currentPage = useTypedSelector((state) => state.currentPageReducer);
  const cardsPerPage = 10;
  const lastIndexFilm = currentPage * cardsPerPage;
  const firstIndexFilm = lastIndexFilm - cardsPerPage;
  const currentCards = listFilms.slice(firstIndexFilm, lastIndexFilm);

  return (
    <div className="listfilms">
      {currentCards.map((film: FilmProps) => {
        return (
          <CardFilm
            setAuthActive={setAuthActive}
            title={film.title}
            key={film.id}
            filmId={film.id}
            poster={film.poster_path}
            vote={film.vote_average}
          />
        );
      })}
    </div>
  );
}

export { ListFilms };
