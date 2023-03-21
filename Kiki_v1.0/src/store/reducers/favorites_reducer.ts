const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

interface FavoritesAction {
  type: string;
  payload: number;
}

const favoritesJson = localStorage.getItem("favorites");
const currentFavorites =
  favoritesJson !== null ? JSON.parse(favoritesJson) : [];

export const favoritesReducer = (
  state = currentFavorites,
  action: FavoritesAction
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const addedState = [...state, action.payload];
      localStorage.setItem("favorites", JSON.stringify(addedState));
      return addedState;

    case REMOVE_FAVORITE:
      const deletedState = state.filter((id: number) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(deletedState));
      return deletedState;
    default:
      return state;
  }
};
