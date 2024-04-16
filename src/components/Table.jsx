import React, { useEffect, useState } from "react";

const Table = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Completed" : "Not Complete"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
