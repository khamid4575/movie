import { useContext } from "react";
import "./appInfo.css";
import { Context } from "../../context";

const AppInfo = () => {
  const { state } = useContext(Context);

  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {state.data.length}
      </p>
      <p className="fs-4 text-uppercase">
        Sevimli kinolar soni: {state.data.filter((c) => c.favourite).length}
      </p>
    </div>
  );
};

export default AppInfo;
