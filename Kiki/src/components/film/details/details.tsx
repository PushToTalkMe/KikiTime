import React from "react";
import { useTypedSelector } from "../../../hooks/use_typed_selector";
import { format } from "date-fns";
import "./details.css";

function Details() {
  const film = useTypedSelector((state) => state.filmReducer);

  const dateNow = format(new Date(), "yyyy-MM-dd");
  const dateRelease = film.release_date;
  const isRelease = dateNow < dateRelease ? "No released" : "Released";
  const language = film.original_language;
  return (
    <div className="details">
      <div className="status">
        <h3>Статус</h3>
        <span>{isRelease}</span>
      </div>
      <div className="status">
        <h3>Дата выхода</h3>
        <span>{dateRelease}</span>
      </div>
      <div className="status">
        <h3>Язык оригинала</h3>
        <span>{language}</span>
      </div>
    </div>
  );
}

export { Details };
