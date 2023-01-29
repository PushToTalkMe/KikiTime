//Добавить actionCreators 
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Filter } from "./components/filter/filter";
import { Auth } from "./components/auth/auth";
import { ListFilms } from "./components/list_films/list_films";
import { Film } from "./components/film/film";
import { Details } from "./components/film/details/details";
import { Actors } from "./components/film/actors/actors";
import { Video } from "./components/film/video/video";
import { Search } from "./components/search/search";

import "./App.css";

function App() {
  const [authActive, setAuthActive] = useState(false);

  return (
    <Router>
      <div className="App">
        {authActive ? <Auth setAuthActive={setAuthActive} /> : null}
        <Header setAuthActive={setAuthActive} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Filter />
                <ListFilms setAuthActive={setAuthActive} />
              </div>
            }
          ></Route>
          <Route path="/:filmId" element={<Film />}>
            <Route path="/:filmId/details" element={<Details />}></Route>
            <Route path="/:filmId/actors" element={<Actors />}></Route>
            <Route path="/:filmId/video" element={<Video />}></Route>
          </Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export { App };
