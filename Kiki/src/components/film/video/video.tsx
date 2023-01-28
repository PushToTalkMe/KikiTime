//Найти трейлеры к фильмам

import React from "react";
import { useTypedSelector } from "../../../hooks/use_typed_selector";
import "./video.css";

function Video() {
  const film = useTypedSelector((state) => state.filmReducer);

  return <div className="video"></div>;
}

export { Video };
