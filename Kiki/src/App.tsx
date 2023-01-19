import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import ListFilms from "./components/ListFilms/ListFilms";
import { listfilms } from "./data/listfilms";
import "./App.css";

function App() {
  const [films, setFilms] = useState(listfilms);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 10;
  const totalPages = Math.ceil(films.length / cardsPerPage);

  const lastIndexFilm = currentPage * cardsPerPage;
  const firstIndexFilm = lastIndexFilm - cardsPerPage;

  const currentCards = films.slice(firstIndexFilm, lastIndexFilm);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      return;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Filter
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        ></Filter>
        <ListFilms films={currentCards}></ListFilms>
      </div>
    </div>
  );
}

export default App;
