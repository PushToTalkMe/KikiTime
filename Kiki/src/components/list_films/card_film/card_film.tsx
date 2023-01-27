import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

  const handlerFavorite = () => {
    if (isAuth) {
      if (!favorites.includes(filmId)) {
        dispatch({ type: "ADD_FAVORITE", payload: filmId });
      } else {
        dispatch({ type: "REMOVE_FAVORITE", payload: filmId });
      }
    } else {
      setAuthActive(true);
    }
  };

  const handleWatchLater = () => {
    if (isAuth) {
      if (!watchLater.includes(filmId)) {
        dispatch({ type: "ADD_WATCH_LATER", payload: filmId });
      } else {
        dispatch({ type: "REMOVE_WATCH_LATER", payload: filmId });
      }
    } else {
      setAuthActive(true);
    }
  };

  const iconStatusStar = () => {
    return isAuth ? (
      favorites.includes(filmId) ? (
        <img src="/star_active.png" alt="star" />
      ) : (
        <img src="/star.png" alt="star" />
      )
    ) : (
      <img src="/star.png" alt="star" />
    );
  };

  const iconStatusWatchLater = () => {
    return isAuth ? (
      watchLater.includes(filmId) ? (
        <img src="/mark_active.png" alt="mark" />
      ) : (
        <img src="/mark.png" alt="mark" />
      )
    ) : (
      <img src="/mark.png" alt="mark" />
    );
  };

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
      <div className="cardContent">
        <div className="cardHeader">
          <p>Рейтинг: {vote}</p>
          <button onClick={() => handlerFavorite()}>{iconStatusStar()}</button>
          <button onClick={() => handleWatchLater()}>
            {iconStatusWatchLater()}
          </button>
        </div>
        <h4>{title}</h4>
        <div className="cardFooter">
          <Link
            onClick={() => {
              dispatch({ type: "ADD_FILM", payload: filmId });
            }}
            to={`/${filmId}`}
          >
            <button>Подробнее</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { CardFilm };
