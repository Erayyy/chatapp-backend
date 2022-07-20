import React from 'react'

export const ToggleButton = props => {

    const style = {
        display: "block",
        appearance: "none",
        margin: "1rem",
        height: "1.5rem", 
        width: "1.5rem", 
        cursor: "pointer"
    }

  return (
    <img 
        src={require("../../icons/hamburger.png")} 
        style={style} 
        onClick={props.onClick} 
        alt={"hamburger toggler"}
    />
  )
}
