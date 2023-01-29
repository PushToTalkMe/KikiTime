const ADD_WATCH_LATER = "ADD_WATCH_LATER";
const REMOVE_WATCH_LATER = "REMOVE_WATCH_LATER";

interface WatchLaterAction {
  type: string;
  payload: number;
}

const watchLaterJson = localStorage.getItem("watchLater");
const currentWatchLater =
  watchLaterJson !== null ? JSON.parse(watchLaterJson) : [];

export const watchLaterReducer = (
  state = currentWatchLater,
  action: WatchLaterAction
) => {
  switch (action.type) {
    case ADD_WATCH_LATER:
      const addedState = [...state, action.payload];
      localStorage.setItem("watchLater", JSON.stringify(addedState));
      return addedState;
    case REMOVE_WATCH_LATER:
      const deletedState = state.filter((id: number) => id !== action.payload);
      localStorage.setItem("watchLater", JSON.stringify(deletedState));
      return deletedState;
    default:
      return state;
  }
};
