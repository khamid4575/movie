import { Component } from "react";
import "./searchPanel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({term})
    this.props.updateTermHandler(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish..."
        onChange={this.updateTermHandler}
      />
    );
  }
}

export default SearchPanel;