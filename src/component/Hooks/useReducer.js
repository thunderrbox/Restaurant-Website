import React from "react";
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "INCR"){
        return state + 1;
    }
    if(action.type === "DECR"){
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    const intial = 0;
    // const [myNum, setmyNum] = React.useState(intial);

    const [state, dispatch] = React.useReducer(reducer, intial);


  return (
    <div className="center_div">
      <p>{state}</p>
      <div className="button2" onClick={() => dispatch({"type": "INCR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Increment
      </div>
      <div className="button2" onClick={() => dispatch({"type": "DECR"})}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Decrement
      </div>
    </div>
  );
};

export default UseReducer ;
