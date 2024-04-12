import React from "react";
import Card from "./Card";

const List = (props) => {
  return (
    <>
      <h4>User List</h4>
      <div>
        {props.userInfo.map((user) => (
          <Card css={"card-mt"}>
            <div>
              <p>Name : {user.name}</p>
              <p>Live : {user.live}</p>
              <p>Email : {user.email}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default List;
