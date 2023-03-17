import { dataListFilms } from "../../data/data_list_films";
const POPULAR_ASCENDING = "POPULAR_ASCENDING";
const POPULAR_DESCENDING = "POPULAR_DESCENDING";
const RATING_ASCENDING = "RATING_ASCENDING";
const RATING_DESCENDING = "RATING_DESCENDING";
const FILTER = "FILTER";
const FILTER_FAVORITESS = "FILTER_FAVORITES";
const FILTER_WATCH_LATER = "FILTER_WATCH_LATER";
const FILTER_NOT_CHOICE = "FILTER_NOT_CHOICE";
const ADD_YEAR = "ADD_YEAR";
const ADD_SORT = "ADD_SORT";
const ADD_GENRES = "ADD_GENRES";
const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";
const ADD_WATCH_LATER = "ADD_WATCH_LATER";
const REMOVE_WATCH_LATER = "REMOVE_WATCH_LATER";
const DELETE_GENRES = "DELETE_GENRES";

const favoritesJson = localStorage.getItem("favorites");
const watchLaterJson = localStorage.getItem("watchLater");

const initialState = {
  listFilms: dataListFilms,
  currentFilms: [],
  favorites: favoritesJson !== null ? JSON.parse(favoritesJson) : [],
  watchLater: watchLaterJson !== null ? JSON.parse(watchLaterJson) : [],
  filter: {
    year: 2020,
    sortBy: "POPULAR_DESCENDING",
    genres: [],
    favorites: false,
    watchLater: false,
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
  filterFavorites() {
    return {
      ...this,
      currentFilms: this.currentFilms.filter((film: any) =>
        this.favorites.includes(film.id)
      ),
    };
  },
  filterWatchLater() {
    return {
      ...this,
      currentFilms: this.currentFilms.filter((film: any) =>
        this.watchLater.includes(film.id)
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
      if (state.filter.favorites) {
        return state.filter.genres.length > 0
          ? state.filterYear().filterSortBy().filterGenres().filterFavorites()
          : state.filterYear().filterSortBy().filterFavorites();
      }
      if (state.filter.watchLater) {
        return state.filter.genres.length > 0
          ? state.filterYear().filterSortBy().filterGenres().filterWatchLater()
          : state.filterYear().filterSortBy().filterWatchLater();
      }
      return state.filter.genres.length > 0
        ? state.filterYear().filterSortBy().filterGenres()
        : state.filterYear().filterSortBy();
    case FILTER_FAVORITESS:
      return (state = Object.assign({}, state, {
        filter: {
          ...state.filter,
          favorites: true,
          watchLater: false,
        },
      }));
    case FILTER_WATCH_LATER:
      return (state = Object.assign({}, state, {
        filter: {
          ...state.filter,
          favorites: false,
          watchLater: true,
        },
      }));
    case FILTER_NOT_CHOICE:
      return (state = Object.assign({}, state, {
        filter: {
          ...state.filter,
          favorites: false,
          watchLater: false,
        },
      }));
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
    case ADD_FAVORITES:
      const addedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(addedFavorites));
      return (state = Object.assign({}, state, {
        favorites: addedFavorites,
      }));
    case REMOVE_FAVORITES:
      const deletedFavorites = state.favorites.filter(
        (id: number) => id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(deletedFavorites));
      return (state = Object.assign({}, state, {
        favorites: deletedFavorites,
      }));
    case ADD_WATCH_LATER:
      const addedWatchLater = [...state.watchLater, action.payload];
      localStorage.setItem("watchLater", JSON.stringify(addedWatchLater));
      return (state = Object.assign({}, state, {
        watchLater: addedWatchLater,
      }));
    case REMOVE_WATCH_LATER:
      const deletedWatchLater = state.watchLater.filter(
        (id: number) => id !== action.payload
      );
      localStorage.setItem("watchLater", JSON.stringify(deletedWatchLater));
      return (state = Object.assign({}, state, {
        watchLater: deletedWatchLater,
      }));
    default:
      return state;
  }
};
