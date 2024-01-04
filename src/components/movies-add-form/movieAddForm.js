import { Component } from "react";
import "./movieAddForm.css";
class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewCount: "",
    };
  }

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      name: this.state.name,
      viewCount: this.state.viewCount,
    });
    this.setState({
      name: "",
      viewCount: "",
    });
  };

  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="movies-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            name="name"
            onChange={this.changeHandlerInput}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Necha marta ko'rilgan"
            name="viewCount"
            onChange={this.changeHandlerInput}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
