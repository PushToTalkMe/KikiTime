//Сделать симуляцию запроса https://my-json-server.typicode.com/

import React from "react";
import { useState } from "react";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import ListFilms from "./components/listFilms/ListFilms";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Filter></Filter>
        <ListFilms></ListFilms>
      </div>
    </div>
  );
}

export default App;
