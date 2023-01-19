import React from "react";
import { useState } from "react";
import Pagination from "./Pagination/Pagination";
import Genre from "./Genre/Genre";
import { listgenres } from "../../data/listgenres";
import "./Filter.css";

interface FilterProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

function Filter({ currentPage, totalPages, nextPage, prevPage }: FilterProps) {
  const [genres, setGenres] = useState(listgenres);

  return (
    <div className="filter">
      <h1>Фильтры:</h1>
      <button className="resetFilter">Сбросить все фильтры</button>
      <div>
        <p>Сортировать по:</p>
        <select
          className="select"
          onChange={(event) => console.log(event.target.value)}
        >
          <option value="descending">Популярные по убыванию</option>
          <option value="ascending">Популярные по возрастанию</option>
        </select>
      </div>
      <div>
        <p>Год релиза:</p>
        <select
          className="select"
          onChange={(event) => console.log(event.target.value)}
        >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <ul className="genres">
        {genres.map((genre) => {
          return <Genre key={genre.id} name={genre.name} />;
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      ></Pagination>
    </div>
  );
}

export default Filter;
