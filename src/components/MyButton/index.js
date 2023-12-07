import React from "react";


export const MyCoolButton = props => {

  const clickHandler = () => alert("Таны коммент: " + props.comment);

  return (
    <div>
      <span>{props.tovchNer ? props.tovchNer : "Defualt props"}</span> <br />
      <input
        className='MyButton'
        type='button'
        onClick={clickHandler}
        value={props.text ? props.text : "Click!"}
      />
    </div>
  );
};