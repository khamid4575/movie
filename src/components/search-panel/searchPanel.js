import { useContext, useState } from "react";
import "./searchPanel.css";
import { Context } from "../../context";

const SearchPanel = () => {
  const [term, setTerm] = useState("");

  const { dispatch } = useContext(Context);

  const updateTermHandler = (e) => {
    const term = e.target.value;
    setTerm(term);
    dispatch({ type: "ON_UPDATE_TERM", payload: term.toLowerCase() });
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish..."
      onChange={updateTermHandler}
      value={term}
    />
  );
};

export default SearchPanel;
