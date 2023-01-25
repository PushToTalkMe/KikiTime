//TODO: Поработать с типами, привести их в порядок без any

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import { Pagination } from "./pagination/pagination";
import { Genre } from "./genre/genre";
import { dataListGenres } from "../../data/data_list_genres";

import "./Filter.css";

function Filter() {
  const isAuth = useTypedSelector((state) => state.authReducer.isAuth);
  const favorites = useTypedSelector((state) => state.favoritesReducer);
  const watchLater = useTypedSelector((state) => state.watchLaterReducer);

  const [genres, setGenres] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("POPULAR_DESCENDING");
  const [year, setYear] = useState("2020");
  const [sortIsAuth, setSortIsAuth] = useState("");
  const [isReset, setIsReset] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (genres.length > 0) {
      console.log(genres.length);
      dispatch({ type: year });
      dispatch({ type: "GENRES", payload: genres });
      dispatch({ type: sortBy });
      dispatch({
        type: sortIsAuth,
        payload: sortIsAuth === "FAVORITES" ? favorites : watchLater,
      });
    } else if (genres.length === 0) {
      dispatch({ type: year });
      dispatch({ type: sortBy });
      dispatch({
        type: sortIsAuth,
        payload: sortIsAuth === "FAVORITES" ? favorites : watchLater,
      });
    }
  });

  return (
    <div className="filter">
      <h1>Фильтры:</h1>
      <button
        className="resetFilter"
        onClick={() => {
          setSortBy("POPULAR_DESCENDING");
          setYear("2020");
          setGenres([]);
          setSortIsAuth("");
          setIsReset(!isReset);
        }}
      >
        Сбросить все фильтры
      </button>
      {isAuth ? (
        <div>
          <p>Сортировать по:</p>
          <select
            className="select"
            onChange={(event) => {
              setSortIsAuth(event.target.value);
            }}
            value={sortIsAuth}
          >
            <option value="WATCH_LATER">Смотреть позже</option>
            <option value="FAVORITES">Избранные</option>
          </select>
        </div>
      ) : null}

      <div>
        <p>Сортировать по:</p>
        <select
          className="select"
          onChange={(event) => {
            setSortBy(event.target.value);
          }}
          value={sortBy}
        >
          <option value="POPULAR_DESCENDING">Популярные по убыванию</option>
          <option value="POPULAR_ASCENDING">Популярные по возрастанию</option>
          <option value="RATING_DESCENDING">Рейтинг по убыванию</option>
          <option value="RATING_ASCENDING">Рейтинг по возрастанию</option>
        </select>
      </div>
      <div>
        <p>Год релиза:</p>
        <select
          className="select"
          onChange={(event) => {
            setYear(event.target.value);
          }}
          value={year}
        >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
      <ul className="genres">
        {dataListGenres.map((genre) => {
          return (
            <Genre
              isReset={isReset}
              genreId={genre.id}
              key={genre.id}
              name={genre.name}
              genres={genres}
              setGenres={setGenres}
            />
          );
        })}
      </ul>
      <Pagination></Pagination>
    </div>
  );
}

export { Filter };
