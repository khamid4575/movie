import AppFilter from "../app-filter/appFilter";
import AppInfo from "../app-info/appInfo";
import MovieList from "../movie-list/movieList";
import MoviesAddForm from "../movies-add-form/movieAddForm";
import SearchPanel from "../search-panel/searchPanel";
import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Slova patsana",
          favourite: true,
          like: true,
          viewCount: 456,
        },
        {
          id: 2,
          name: "Oytovoq va Oyqarg'a",
          favourite: false,
          like: false,
          viewCount: 876,
        },
        {
          id: 3,
          name: "Kalish kiygan mushuk",
          favourite: false,
          like: false,
          viewCount: 998,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  addForm = (item) => {
    const newItem = {
      name: item.name,
      viewCount: item.viewCount,
      favourite: false,
      like: false,
      id: uuidv4(),
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onDelete = (id) => {
    this.setState(({ data }) => ({ data: data.filter((c) => c.id !== id) }));
  };

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  updateTermHandler = (term) => {
    this.setState({ term });
  };

  filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewed":
        return arr.filter((c) => c.viewCount > 800);
      default:
        return arr;
    }
  };

  updateFilterHandler = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter((c) => c.favourite).length;

    const visibleData = this.filterHandler(
      this.searchHandler(data, term),
      filter
    );
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMoviesCount={favouriteMoviesCount}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <MovieList
            data={visibleData}
            onToggleProp={this.onToggleProp}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
