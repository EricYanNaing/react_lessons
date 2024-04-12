import React, { useState } from "react";
import FormBox from "./Form";
import List from "./List";

const Main = () => {
  const [userInfo, SetUserInfo] = useState([]);
  const getInfo = (userObj) => {
    SetUserInfo([...userInfo, userObj]);
  };
  return (
    <section className="main">
      <FormBox getInfo={getInfo} />
      <List userInfo={userInfo} />
    </section>
  );
};

export default Main;
