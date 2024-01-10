import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialValue = {
  data: [],
  term: "",
  filter: "all",
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };

    case "ON_DELETE":
      const newArr = state.data.filter((c) => c.id !== payload);
      return { ...state, data: newArr };

    case "ON_TOGGLE_PROP":
      const { id, prop } = payload;
      const toggleArr = state.data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
      return { ...state, data: toggleArr };

    case "ON_UPDATE_TERM":
      return { ...state, term: payload };

    case "ADD_FORM":
      const { name, viewCount } = payload;
      const newItem = {
        name,
        viewCount,
        favourite: false,
        like: false,
        id: uuidv4(),
      };

      return { ...state, data: [...state.data, newItem] };

    case "UPDATE_FILTER":
      return { ...state, filter: payload };

    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
