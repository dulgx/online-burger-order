import React from "react";
import './style.css';
import { buildQueries } from "@testing-library/react";

export const MyCoolButton = props => {

  const clickHandler = () => alert("Таны коммент: " + props.comment);

  //css.color = "blue";

  return (
    <div>
      <span style={css}>
        {props.tovchNer ? props.tovchNer : "Defualt props"}</span> <br />
      <input
        className='MyButton'
        type='button'
        onClick={clickHandler}
        value={props.text ? props.text : "Click!"}
      />
    </div>
  );
};

const css = {
  color: "red",
};