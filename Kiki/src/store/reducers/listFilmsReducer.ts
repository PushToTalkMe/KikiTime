import { dataListFilms } from "../../data/dataListFilms";

const POPULAR_ASCENDING = "POPULAR_ASCENDING";
const POPULAR_DESCENDING = "POPULAR_DESCENDING";
const RATING_ASCENDING = "RATING_ASCENDING";
const RATING_DESCENDING = "RATING_DESCENDING";

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
    case POPULAR_ASCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.popularity > b.popularity) {
          return 1;
        }
        if (a.popularity < b.popularity) {
          return -1;
        }
        return 0;
      });
    case POPULAR_DESCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      });
    case RATING_ASCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.vote_average > b.vote_average) {
          return 1;
        }
        if (a.vote_average < b.vote_average) {
          return -1;
        }
        return 0;
      });
    case RATING_DESCENDING:
      return state.slice().sort((a: any, b: any) => {
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        if (a.vote_average < b.vote_average) {
          return 1;
        }
        return 0;
      });
    case "2020":
      return listFilms.filter((film: any) =>
        film.release_date.includes("2020")
      );
    case "2019":
      return listFilms.filter((film: any) =>
        film.release_date.includes("2019")
      );
    case "2018":
      return listFilms.filter((film: any) =>
        film.release_date.includes("2018")
      );
    case "2017":
      return listFilms.filter((film: any) =>
        film.release_date.includes("2017")
      );
    default:
      return state;
  }
};
