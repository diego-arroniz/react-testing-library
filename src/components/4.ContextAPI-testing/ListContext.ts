import { createContext } from "react";

export const ListContext = createContext({
  searchTerm: "",
  movies: [],
});
