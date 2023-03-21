const ADD_CURRENT_PAGE = "ADD_CURRENT_PAGE";

let currentPage = 1;

interface currentPageAction {
  type: string;
  payload: number;
}

export const currentPageReducer = (
  state = currentPage,
  action: currentPageAction
) => {
  switch (action.type) {
    case ADD_CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
};
