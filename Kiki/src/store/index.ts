import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { listFilmsReducer } from "./reducers/listFilmsReducer";
import { currentPageReducer } from "./reducers/currentPageReducer";

const rootReducer = combineReducers({
  listFilmsReducer,
  currentPageReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
