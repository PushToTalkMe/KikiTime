import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listFilmsReducer } from "./reducers/list_films_reducer";
import { currentPageReducer } from "./reducers/current_page_reducer";
import { authReducer } from "./reducers/auth_reducer";
import { filmReducer } from "./reducers/film_reducer";
const rootReducer = combineReducers({
  listFilmsReducer,
  currentPageReducer,
  authReducer,
  filmReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
