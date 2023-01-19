import React from "react";
import "./Genre.css";

interface GenreProps {
  name: string;
}

function Genre({ name }: GenreProps) {
  return (
    <li className="genre">
      <input type="checkbox" id={name} />
      <label>{name}</label>
    </li>
  );
}

export default Genre;
