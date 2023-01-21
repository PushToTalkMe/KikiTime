//В РАЗРАБОТКЕ

interface Filter {
  sortBy: string;
  year: number;
}

interface filterReducerAction {
  type: string;
  payload?: any;
}

const initialState: Filter = {
  sortBy: "POPULAR_DESCENDING",
  year: 2020,
};

export const filterReducer = (
  state = initialState,
  action: filterReducerAction
) => {
  return action.payload;
};
