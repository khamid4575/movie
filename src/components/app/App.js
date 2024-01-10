import { Context } from "../../context";
import AppFilter from "../app-filter/appFilter";
import AppInfo from "../app-info/appInfo";
import MovieList from "../movie-list/movieList";
import MoviesAddForm from "../movies-add-form/movieAddForm";
import SearchPanel from "../search-panel/searchPanel";
import "./App.css";
import { useContext, useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    console.log("ishadfi");
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          name: item.title,
          id: item.id,
          favourite: false,
          like: false,
          viewCount: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading && <h1 className="text-center my-5">Loading...</h1>}
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
};

export default App;
