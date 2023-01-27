import { dataListFilms } from "../../data/data_list_films";

const SORT_BY_POPULAR_ASCENDING = "POPULAR_ASCENDING";
const SORT_BY_POPULAR_DESCENDING = "POPULAR_DESCENDING";
const SORT_BY_RATING_ASCENDING = "RATING_ASCENDING";
const SORT_BY_RATING_DESCENDING = "RATING_DESCENDING";
const SORT_BY_2020 = "2020";
const SORT_BY_2019 = "2019";
const SORT_BY_2018 = "2018";
const SORT_BY_2017 = "2017";
const SORT_BY_GENRES = "GENRES";
const SORT_BY_WATCH_LATER = "WATCH_LATER";
const SORT_BY_FAVORITES = "FAVORITES";

interface listFilmsAction {
  type: string;
  payload: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
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
        action.payload.every((id: any) => film.genre_ids.includes(id))
      );
    case SORT_BY_WATCH_LATER:
      return listFilms.filter((film) => action.payload.includes(film.id));
    case SORT_BY_FAVORITES:
      return listFilms.filter((film) => action.payload.includes(film.id));

    default:
      return state;
  }
};
