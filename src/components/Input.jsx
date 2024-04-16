import React, { useEffect, useState } from "react";

const Input = () => {
  const [id, setId] = useState(undefined);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const fetchData = async (e) => {
    e.preventDefault();

    if (id < 1) {
      setError(true);
      setId("");
      return;
    } else {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await response.json();
      console.log(data);
      setTodo(data);
      setId("");
    }
  };
  return (
    <div>
      <h3>Input</h3>
      <form onSubmit={fetchData}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Get Data</button>
      </form>
      {error && <div>Please type valid number (example 1,2,3,...etc)</div>}
      {todo && (
        <div>
          <p>Title - {todo.title}</p>
          <p>UserId - {todo.userId}</p>
          <p>Status - {todo.completed ? "Completed" : "Not Complete"}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
