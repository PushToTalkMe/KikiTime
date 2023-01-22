import { dataListFilms } from "../../data/dataListFilms";

const SORT_BY_POPULAR_ASCENDING = "POPULAR_ASCENDING";
const SORT_BY_POPULAR_DESCENDING = "POPULAR_DESCENDING";
const SORT_BY_RATING_ASCENDING = "RATING_ASCENDING";
const SORT_BY_RATING_DESCENDING = "RATING_DESCENDING";
const SORT_BY_2020 = "2020";
const SORT_BY_2019 = "2019";
const SORT_BY_2018 = "2018";
const SORT_BY_2017 = "2017";
const SORT_BY_GENRES = "GENRES";

interface listFilmsAction {
  type: string;
  payload?: any;
}

const listFilms = dataListFilms;

export const listFilmsReducer = (
  state = listFilms,
  action: listFilmsAction
) => {
  switch (action.type) {
    case SORT_BY_POPULAR_ASCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.popularity > b.popularity) {
          return 1;
        }
        if (a.popularity < b.popularity) {
          return -1;
        }
        return 0;
      });
    case SORT_BY_POPULAR_DESCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });
    case SORT_BY_RATING_ASCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.vote_average > b.vote_average) {
          return 1;
        }
        if (a.vote_average < b.vote_average) {
          return -1;
        }
        return 0;
      });
    case SORT_BY_RATING_DESCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        if (a.vote_average < b.vote_average) {
          return 1;
        }
        return 0;
      });
    case SORT_BY_2020:
      return listFilms.filter((film: any) =>
        film.release_date.includes("2020")
      );
    case SORT_BY_2019:
      return listFilms.filter((film: any) =>
        film.release_date.includes("2019")
      );
    case SORT_BY_2018:
      return listFilms.filter((film: any) =>
        film.release_date.includes("2018")
      );
    case SORT_BY_2017:
      return listFilms.filter((film: any) =>
        film.release_date.includes("2017")
      );
    case SORT_BY_GENRES:
      return state.filter((film) =>
        film.genre_ids.some((id) => action.payload.includes(id))
      );
    default:
      return state;
  }
};