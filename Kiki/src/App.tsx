import { useState } from "react";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import ListFilms from "./components/ListFilms/ListFilms";
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
