import "./appFilter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn ${
            filter === btn.name ? "btn-dark" : "btn-outline-dark"
          }`}
          type="button"
          onClick={() => updateFilterHandler(btn.name)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "popular", label: "Mashhur kinolar" },
  { name: "mostViewed", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
