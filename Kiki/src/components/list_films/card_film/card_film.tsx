import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/use_typed_selector";
import "./card_film.css";

interface CardFilmProps {
  title: string;
  poster: string;
  vote: number;
  setAuthActive: (arg0: boolean) => void;
  filmId: number;
}

function CardFilm({
  title,
  poster,
  vote,
  setAuthActive,
  filmId,
}: CardFilmProps) {
  const isAuth = useTypedSelector((state) => state.authReducer.isAuth);
  const favorites = useTypedSelector((state) => state.favoritesReducer);
  const watchLater = useTypedSelector((state) => state.watchLaterReducer);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
      <div className="cardContent">
        <div className="cardHeader">
          <p>Рейтинг: {vote}</p>
          <button
            onClick={() => {
              if (isAuth) {
                console.log("isAuth");
                if (!favorites.includes(filmId)) {
                  dispatch({ type: "ADD_FAVORITE", payload: filmId });
                } else {
                  dispatch({ type: "REMOVE_FAVORITE", payload: filmId });
                }
              } else {
                console.log("!isAuth");
                setAuthActive(true);
              }
            }}
          >
            {favorites.includes(filmId) ? (
              <img src="/star_active.png" alt="star" />
            ) : (
              <img src="/star.png" alt="star" />
            )}
          </button>
          <button
            onClick={() => {
              if (isAuth) {
                console.log("isAuth");
                if (!watchLater.includes(filmId)) {
                  dispatch({ type: "ADD_WATCH_LATER", payload: filmId });
                } else {
                  dispatch({ type: "REMOVE_WATCH_LATER", payload: filmId });
                }
              } else {
                console.log("!isAuth");
                setAuthActive(true);
              }
            }}
          >
            {watchLater.includes(filmId) ? (
              <img src="/mark_active.png" alt="mark" />
            ) : (
              <img src="/mark.png" alt="mark" />
            )}
          </button>
        </div>
        <h4>{title}</h4>
        <div className="cardFooter">
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export { CardFilm };
