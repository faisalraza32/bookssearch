import React, { createContext, useReducer } from "react";
import BooksReducer from "./BooksReducer";
import { SET_SEARCH_TERM, SEARCH_BOOKS_URL } from "./BooksActions";
import { useQuery } from "react-query";
export const BOOKS_INITIAL_STATE = {
  SearchTerm: "ReactJS",
  Books: {
    resultCount: 0,
    results: [],
  },
};

const searchBooks = async (term = "ReactJS", topRows = 25) => {
  const url = `${SEARCH_BOOKS_URL}&limit=${topRows}&term=${term}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Server error, cannot fetch data!");
  }
  const data = await response.json();

  return data;
};

export const BooksContext = createContext(BOOKS_INITIAL_STATE);

const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BooksReducer, BOOKS_INITIAL_STATE);
  const searchTerm = state.SearchTerm;
  const { isLoading, isError, error, status, data } = useQuery(
    ["books", searchTerm],
    () => searchBooks(searchTerm, 100)
  );

  const setSearchTerm = (term) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: term,
    });
  };

  return (
    <BooksContext.Provider
      value={{
        Books: data ?? BOOKS_INITIAL_STATE.Books,
        SearchTerm: state.SearchTerm,
        setSearchTerm,
        booksIsLoading: isLoading,
        booksIsError: isError,
        booksError: error,
        booksStatus: status,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
