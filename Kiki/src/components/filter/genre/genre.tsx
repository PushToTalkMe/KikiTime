import React from "react";
import { useState, useEffect } from "react";
import { addInState } from "../../../modules/add_in_state";
import { deleteInState } from "../../../modules/delete_in_state";
import "./Genre.css";

interface GenreProps {
  isReset: boolean;
  name: string;
  genreId: number;
  genres: number[];
  setGenres: (genres: number[]) => void;
}

function Genre({ isReset, name, genreId, genres, setGenres }: GenreProps) {
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
            addInState(genres, setGenres, genreId);
            setChecked(true);
          } else {
            deleteInState(genres, setGenres, genreId);
            setChecked(false);
          }
        }}
      />
      <label>{name}</label>
    </li>
  );
}

export { Genre };
