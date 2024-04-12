import React, { useReducer } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(firstReducer, { key: "", count: 0 });
  return (
    <div>
      <h1>Use Reducer</h1>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "updateKey", payload: e.target.value })
        }
      />
      <h5>Your Key is - {state.key}</h5>
      <div>
        <button onClick={() => dispatch({ type: "minus" })}>-</button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "plus" })}>+</button>
      </div>
    </div>
  );
};

export default UseReducer;
