import { useContext, useState } from "react";
import "./movieAddForm.css";
import { Context } from "../../context";

const MoviesAddForm = () => {
  const [state, setState] = useState({ name: "", viewCount: "" });

  const { dispatch } = useContext(Context);

  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    if (
      (state.name.trim() === "" && state.viewCount === "") ||
      (state.name.trim() === "" && state.viewCount !== "") ||
      (state.name.search(/\w/))
    )
      return;

    const data = { name: state.name, viewCount: state.viewCount };
    dispatch({ type: "ADD_FORM", payload: data });
    setState({ name: "", viewCount: "" });
  };

  return (
    <div className="movies-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex" onSubmit={addFormHandler}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
          name="name"
          onChange={changeHandlerInput}
          value={state.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Necha marta ko'rilgan"
          name="viewCount"
          onChange={changeHandlerInput}
          value={state.viewCount}
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MoviesAddForm;
