import React from "react";
import { useState, useEffect } from "react";
import "./Genre.css";

interface GenreProps {
  isReset: boolean;
  name: string;
  genreId: number;
  addGenre: (genreId: number) => void;
  deleteGenre: (genreId: number) => void;
}

function Genre({ isReset, name, genreId, addGenre, deleteGenre }: GenreProps) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(false);
  }, [isReset]);
  return (
    <li className="genre">
      <input
        type="checkbox"
        id={`${genreId}`}
        checked={checked}
        onChange={(e) => {
          if (checked === false) {
            addGenre(genreId);
            setChecked(true);
          } else {
            deleteGenre(genreId);
            setChecked(false);
          }
        }}
      />
      <label>{name}</label>
    </li>
  );
}

export default Genre;
