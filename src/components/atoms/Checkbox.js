import React from "react";

function Checkbox(props) {
  return (
    <input type="checkbox" className="button" onClick={props.onClick}>
      {props.children}
    </input>
  );
}

export default Checkbox;
