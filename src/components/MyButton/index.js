import React, { useState } from "react";
import './style.css';


export const MyCoolButton = props => {

  const [commentHistory, setCommentHistory] = useState([]); // [
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    setCommentHistory([...commentHistory, props.comment]);
  }
  //css.color = "blue";

  return (
    <div className="CoolButtonContainer">
      <span style={css}>
        {props.tovchNer ? props.tovchNer : "Defualt props"}</span> <br />
      <input
        className='MyButton'
        type='button'
        onClick={clickHandler}
        value={props.text ? `${count}) ${props.text} ` : "Click!"}
      />

      <div>
        {commentHistory.map(el =>
        (<div>{el}</div>
        ))}
      </div>

    </div>
  );
};

const css = {
  color: "red",
};