import { SEARCH_BOOKS, SET_SEARCH_TERM } from "./BooksActions";

const BooksReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        SearchTerm: action.payload,
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        Books: action.payload,
      };
    default:
      return state;
  }
};

export default BooksReducer;
