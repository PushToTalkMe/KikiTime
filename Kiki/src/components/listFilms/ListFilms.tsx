import React from "react";
import { useState, useEffect } from "react";
import CardFilm from "./cardFilm/CardFilm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./ListFilms.css";

function ListFilms() {
  const currentPage = useTypedSelector((state) => state.currentPageReducer);
  // const [listFilms] = useState(listFilmsd);
  // const [currentCards, setCurrentCards] = useState([]);
  const cardsPerPage = 10;
  const lastIndexFilm = currentPage * cardsPerPage;
  const firstIndexFilm = lastIndexFilm - cardsPerPage;
  const listFilms = useTypedSelector((state) =>
    state.listFilmsReducer.slice(firstIndexFilm, lastIndexFilm)
  );

  // const currentCards = listFilms.slice(firstIndexFilm, lastIndexFilm);

  return (
    <div className="listfilms">
      {listFilms.map((film: any) => {
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
