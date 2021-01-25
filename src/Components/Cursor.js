import { useEffect } from "react";
import { MousePosition } from "../hook/MousePos.js";
import "../scss/cursor.scss";

export default function Cursor() {
  const mouse = MousePosition();

  useEffect(() => {
    const $cursor = document.getElementById("cursor");
    cursor($cursor, mouse.x, mouse.y);
  });
  return (
    <>
      <div id="cursor">
        {/* <svg viewBox="0 0 200 200">
          <path 
            id="cursorPath"
            d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0"
          />
          <text>
            <textPath href="#cursorPath">ScollDown</textPath>
            <textPath href="#cursorPath" transform="rotate(100)">
              ScollDown
            </textPath>
          </text>
        </svg> */}
      </div>
    </>
  );
}

const cursor = (target, mouseX, mouseY) => {
  window.addEventListener("mousemove", (e) => {
    target.style.top = `${mouseY}px`;
    target.style.left = `${mouseX}px`;
  });
};
