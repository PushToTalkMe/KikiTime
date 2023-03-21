import { dataListFilms } from "../../data/data_list_films";

const ADD_FILM = "ADD_FILM";

interface FilmAction {
  type: string;
  payload: number;
}
const filmJson = localStorage.getItem("film");
const currentFilm = filmJson !== null ? JSON.parse(filmJson) : [];

export const filmReducer = (state = currentFilm, action: FilmAction) => {
  switch (action.type) {
    case ADD_FILM:
      const film = dataListFilms.find((film) => film.id === action.payload);
      localStorage.setItem("film", JSON.stringify(film));
      return film;
    default:
      return state;
  }
};
