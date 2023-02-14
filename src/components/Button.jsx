import React from "react";
import "./Button.css";

export default (props) => {
  // Adicionando classes se existir certa prop no componente
  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";

  return (
    <button
      onClick={(e) => props.click && props.click(e.target.innerHTML)} // Talvez trocar por e.target.label ?
      className={classes}
    >
      {props.label}
    </button>
  );
};
