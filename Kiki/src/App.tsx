//Сделать симуляцию запроса https://my-json-server.typicode.com/
//!TODO:
//Переделать isAuth под редакс + проверить ещё раз карточки
//Добавить localStorage для сохранения авторизации

import React from "react";
import { useState } from "react";
import { Header } from "./components/header/header";
import { Filter } from "./components/filter/filter";
import { Auth } from "./components/auth/auth";
import { ListFilms } from "./components/list_films/list_films";

import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [authActive, setAuthActive] = useState(false);

  return (
    <div className="App">
      {authActive ? <Auth setAuthActive={setAuthActive} /> : null}
      <Header setAuthActive={setAuthActive}></Header>
      <div className="container">
        <Filter></Filter>
        <ListFilms setAuthActive={setAuthActive}></ListFilms>
      </div>
    </div>
  );
}

export default App;
