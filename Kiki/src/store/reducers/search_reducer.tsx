import { dataListFilms } from "../../data/data_list_films";

const SORT_BY_GENRE = "GENRE";
const SORT_BY_HIGH = "HIGH";
const SORT_BY_LOW = "LOW";
const SORT_BY_POPULAR = "POPULAR";
const SORT_BY_UNKNOWN = "UNKNOWN";

interface listFilmsAction {
  type: string;
  payload: number;
}

const listFilms = dataListFilms;

export const searchReducer = (
  state = listFilms,
  action: listFilmsAction
) => {
  switch (action.type) {
    case SORT_BY_GENRE:
      return listFilms.filter((film) =>
        film.genre_ids.includes(action.payload));
    case SORT_BY_HIGH:
      return state.filter((film) =>
        film.vote_average > 5);
    case SORT_BY_LOW:
      return state.filter((film) =>
        film.vote_average <= 5);
    case SORT_BY_POPULAR:
      return state.filter((film) =>
        film.popularity > 100 && film.vote_count > 200);
    case SORT_BY_UNKNOWN:
      return state.filter((film) =>
        film.popularity < 100 && film.vote_count <= 200);
    default:
      return state;
  }
};
