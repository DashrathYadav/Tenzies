import { useState } from "react";
import "./Btn.css";

export function Btn({ handleRollClick,gameStatus }) {

  let btnText
  if(gameStatus==="notStart")
  btnText="Lets Check"
  else
  btnText="Roll"

  console.log("in btn ",gameStatus)

  function mousePosition(e) {
    const button = document.getElementById("button");
    var x = e.pageX - button.offsetLeft; //x position within the element.
    var y = e.pageY - button.offsetTop;
    button.style.setProperty("--xpos", x + "px");
    button.style.setProperty("--ypos", y + "px");
  }

  return (
    <button
      id="button"
      className="btn"
      onClick={(e) => {
        handleRollClick();
      }}
      onMouseOver={mousePosition}
    >
      <span>
        <b>{btnText}</b>
      </span>
    </button>
  );
}
