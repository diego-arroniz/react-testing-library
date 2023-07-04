import { useContext } from "react";

import { ListContext } from "./ListContext";
import Movie from "./Movie";

const List = () => {
  const { movies, searchTerm } = useContext(ListContext);

  const listItems = movies
    .filter(
      (m) => m.name.includes(searchTerm) || m.description.includes(searchTerm)
    )
    .map((movie) => (
      <li key={movie.id}>
        <Movie {...movie} />
      </li>
    ));
  return <ul>{listItems}</ul>;
};

export default List;
