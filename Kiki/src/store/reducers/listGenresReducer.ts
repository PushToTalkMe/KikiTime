//В РАЗРАБОТКЕ

import { dataListGenres } from "../../data/dataListGenres";

interface listGenresAction {
  type: string;
  payload?: any;
}

const listGenres = dataListGenres;

export const listGenresReducer = (
  state = listGenres,
  action: listGenresAction
) => {
  return state;
};
