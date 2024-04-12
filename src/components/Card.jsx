import React from "react";

const Card = (props) => {
  return <div className={`${props.css} form-box`}>{props.children}</div>;
};

export default Card;
