import React from "react";
import "./style.css";

const UseEffect = () => {
  //   const intial = 0;
  const [myNum, setmyNum] = React.useState(0);

  React.useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
  // if you want to call useEffect on every render then you can simply remove the dependency array. If you want to call useEffect only when a specific state changes then you can pass that state in the dependency array.

  return (
    <div className="center_div">
      <p>{myNum}</p>
      <div
        className="button2"
        onClick={() => {
          setmyNum(myNum + 1);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Increment
      </div>
    </div>
  );
};

export default UseEffect;
