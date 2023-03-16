import { dataListFilms } from "../../data/data_list_films";

const POPULAR_ASCENDING = "POPULAR_ASCENDING";
const POPULAR_DESCENDING = "POPULAR_DESCENDING";
const RATING_ASCENDING = "RATING_ASCENDING";
const RATING_DESCENDING = "RATING_DESCENDING";
const FILTER = "FILTER";
const ADD_YEAR = "ADD_YEAR";
const ADD_SORT = "ADD_SORT";
const ADD_GENRES = "ADD_GENRES";
const DELETE_GENRES = "DELETE_GENRES";

const initialState = {
  listFilms: dataListFilms,
  currentFilms: [],
  favorites: [],
  watchLater: [],
  filter: {
    year: 2020,
    sortBy: "POPULAR_DESCENDING",
    genres: [],
  },
  filterYear() {
    return {
      ...this,
      currentFilms: this.listFilms.filter((film: any) =>
        film.release_date.includes(String(this.filter.year))
      ),
    };
  },
  filterSortBy() {
    return {
      ...this,
      currentFilms: this.currentFilms.sort((a: any, b: any) => {
        switch (this.filter.sortBy) {
          case POPULAR_ASCENDING:
            if (a.popularity > b.popularity) {
              return 1;
            }
            if (a.popularity < b.popularity) {
              return -1;
            }
            return 0;
          case POPULAR_DESCENDING:
            if (a.popularity > b.popularity) {
              return -1;
            }
            if (a.popularity < b.popularity) {
              return 1;
            }
            return 0;
          case RATING_ASCENDING:
            if (a.vote_average > b.vote_average) {
              return 1;
            }
            if (a.vote_average < b.vote_average) {
              return -1;
            }
            return 0;
          case RATING_DESCENDING:
            if (a.vote_average > b.vote_average) {
              return -1;
            }
            if (a.vote_average < b.vote_average) {
              return 1;
            }
            return 0;
        }
      }),
    };
  },
  filterGenres() {
    return {
      ...this,
      currentFilms: this.currentFilms.filter((film: any) =>
        this.filter.genres.every((id: number) => film.genre_ids.includes(id))
      ),
    };
  },
};

export const listFilmsReducer = (
  state = initialState.filterYear().filterGenres(),
  action: { payload: number[] | number; type: string }
) => {
  switch (action.type) {
    case FILTER:
      return state.filter.genres.length > 0
        ? state.filterYear().filterSortBy().filterGenres()
        : state.filterYear().filterSortBy();
    case ADD_YEAR:
      return (state = Object.assign({}, state, {
        filter: { ...state.filter, year: action.payload },
      }));
    case ADD_SORT:
      return (state = Object.assign({}, state, {
        filter: { ...state.filter, sortBy: action.payload },
      }));
    case ADD_GENRES:
      return (state = Object.assign({}, state, {
        filter: {
          ...state.filter,
          genres: [...state.filter.genres, action.payload],
        },
      }));
    case DELETE_GENRES:
      return (state = Object.assign({}, state, {
        filter: {
          ...state.filter,
          genres: state.filter.genres.filter(
            (id: any) => id !== action.payload
          ),
        },
      }));
    default:
      return state;
  }
};
