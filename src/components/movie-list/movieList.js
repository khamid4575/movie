import "./movieList.css";
import MovieListItem from "../movie-list-item/movieListItem.js";
import { useContext } from "react";
import { Context } from "../../context/index.js";
import { filterHandler, searchHandler } from "../../utilities/data.js";

const MovieList = () => {
  const { state } = useContext(Context);

  const data = filterHandler(
    searchHandler(state.data, state.term),
    state.filter
  );

  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
