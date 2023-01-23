import React from "react";
import CardFilm from "./cardFilm/CardFilm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./ListFilms.css";

function ListFilms() {
  const listFilms = useTypedSelector((state) => state.listFilmsReducer);
  const currentPage = useTypedSelector((state) => state.currentPageReducer);
  const cardsPerPage = 10;
  const lastIndexFilm = currentPage * cardsPerPage;
  const firstIndexFilm = lastIndexFilm - cardsPerPage;
  const currentCards = listFilms.slice(firstIndexFilm, lastIndexFilm);

  return (
    <div className="listfilms">
      {currentCards.map((film: any) => {
        return (
          <CardFilm
            title={film.title}
            key={film.id}
            poster={film.poster_path}
            vote={film.vote_average}
          />
        );
      })}
    </div>
  );
}

export default ListFilms;
