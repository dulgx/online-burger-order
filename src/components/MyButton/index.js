import React from "react";

export const MyCoolButton = props => {
  
    const  clickHandler = () => alert(`Өнөөдөр: ${new Date()}`);
  
    return(
    <div>
        <span>{ props.tovchNer ? props.tovchNer : "Defualt props"}</span> <br />
        <span>{`Өнөөдөр : ${new Date()}`}</span> 
        <br />     
        <input 
          className='MyButton' 
          type='button'
          onClick={clickHandler} 
          value={props.text ? props.text : "Click!"} 
        />
    </div> 
    );
  };