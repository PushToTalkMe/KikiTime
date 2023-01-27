const NEXT_CURRENT_PAGE = "NEXT_CURRENT_PAGE";
const PREV_CURRENT_PAGE = "PREV_CURRENT_PAGE";

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
    case NEXT_CURRENT_PAGE:
      return state + 1;
    case PREV_CURRENT_PAGE:
      return state - 1;
    default:
      return state;
  }
};
