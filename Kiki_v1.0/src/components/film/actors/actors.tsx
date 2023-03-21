//Найти список актеров

import React from "react";
import { useTypedSelector } from "../../../hooks/use_typed_selector";
import "./actors.css";

function Actors() {
  const film = useTypedSelector((state) => state.filmReducer);

  return <div className="actors"></div>;
}

export { Actors };
