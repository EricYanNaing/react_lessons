import React, { useRef } from "react";
import Card from "./Card";

const Form = (props) => {
  const nameInput = useRef();
  const liveInput = useRef();
  const emailInput = useRef();

  const addUser = (event) => {
    event.preventDefault();

    if (
      nameInput.current.value.trim().length === 0 ||
      liveInput.current.value.trim().length === 0 ||
      emailInput.current.value.trim().length === 0
    ) {
      alert("Please Fill the input!");
      return;
    }

    const userInfo = {
      name: nameInput.current.value,
      live: liveInput.current.value,
      email: emailInput.current.value,
    };

    props.getInfo(userInfo);

    nameInput.current.value = ""
    liveInput.current.value = ""
    emailInput.current.value = ""
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div className="box">
          <label htmlFor="name">Name</label>
          <input type="text" ref={nameInput} placeholder="Name" />
        </div>
        <div className="box">
          <label htmlFor="name">Live</label>
          <input type="text" ref={liveInput} placeholder="Live" />
        </div>
        <div className="box">
          <label htmlFor="name">Email</label>
          <input type="text" ref={emailInput} placeholder="Email" />
        </div>
        <button className="addBtn">Add User</button>
      </form>
    </Card>
  );
};

export default Form;
