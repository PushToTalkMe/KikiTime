import React from "react";
import { useState } from "react";
import CardFilm from "./CardFilm/CardFilm";
import { listfilms } from "../../data/listfilms";
import "./ListFilms.css";

interface Films {
  films: any;
}

function ListFilms({ films }: Films) {
  return (
    <div className="listfilms">
      {films.map((film: any) => {
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
