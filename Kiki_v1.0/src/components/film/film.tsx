import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import "./film.css";

function Film() {
  const film = useTypedSelector((state) => state.filmReducer);

  const backdrop = film.backdrop_path;
  const poster = film.poster_path;
  const title = film.title;
  const vote = film.vote_average;
  const overview = film.overview;
  const id = film.id;

  return (
    <div className="film">
      <div className="main_content">
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/w500${backdrop}`}
          alt="backdrop"
        />
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
          <div className="overview">
            <h1>{title}</h1>
            <span>Рейтинг: {vote}</span>
            <p>{overview}</p>
          </div>
        </div>
      </div>
      <div className="alt_content">
        <div className="tabs">
          <NavLink to={`/KikiTime/${id}/details`}>Детали</NavLink>
          <NavLink to={`/KikiTime/${id}/actors`}>Актеры</NavLink>
          <NavLink to={`/KikiTime/${id}/video`}>Видео</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export { Film };
