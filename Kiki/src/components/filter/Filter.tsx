//TODO: фильтр по жанрам не работает, если выбрать больше 1 жанра
//Возможно мутириует состояние

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from "./pagination/Pagination";
import Genre from "./genre/Genre";
import { dataListGenres } from "../../data/dataListGenres";
import "./Filter.css";

function Filter() {
  const [genres, setGenres] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("POPULAR_DESCENDING");
  const [year, setYear] = useState("2020");
  const [isReset, setIsReset] = useState(false);

  const dispatch = useDispatch();

  const addGenre = (genreId: number) => {
    if (!genres.includes(genreId)) {
      setGenres([...genres, genreId]);
    }
  };

  const deleteGenre = (genreId: number) => {
    setGenres(genres.filter((id) => id !== genreId));
  };

  useEffect(() => {
    if (genres.length > 0) {
      console.log(genres.length);
      dispatch({ type: "GENRES", payload: genres });
    } else if (genres.length === 0) {
      dispatch({ type: year });
      dispatch({ type: sortBy });
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
          setIsReset(!isReset);
        }}
      >
        Сбросить все фильтры
      </button>
      <div>
        <p>Сортировать по:</p>
        <select
          className="select"
          onChange={(event) => {
            setSortBy(event.target.value);
            dispatch({ type: event.target.value });
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
            dispatch({ type: event.target.value });
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
              addGenre={addGenre}
              deleteGenre={deleteGenre}
            />
          );
        })}
      </ul>
      <Pagination></Pagination>
    </div>
  );
}

export default Filter;
