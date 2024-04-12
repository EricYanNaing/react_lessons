import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [key, setKey] = useState("");
  useEffect(() => {
    console.log("Use Effect Hook Lesson");
  }, []);
  return (
    <div>
      UseEffect
      <input type="text" onChange={(e) => setKey(e.target.value)} />
    </div>
  );
};

export default UseEffect;
