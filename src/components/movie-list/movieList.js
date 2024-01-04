import "./movieList.css";
import MovieListItem from "../movie-list-item/movieListItem.js";

const MovieList = ({ data, onToggleProp, onDelete }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewCount={item.viewCount}
          favourite={item.favourite}
          like={item.like}
          onToggleProp={(e) =>
            onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
          }
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
