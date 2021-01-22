import { useEffect } from "react";
import { MousePosition } from "./hook/MousePos.js";

export default function Cursor() {
  const mouse = MousePosition();

  useEffect(() => {
    const $cursor = document.getElementById("cursor");
    cursor($cursor, mouse.x, mouse.y);
  });
  return (
    <>
      <div id="cursor"></div>
    </>
  );
}

const cursor = (target, mouseX, mouseY) => {
  window.addEventListener("mousemove", (e) => {
    target.style.top = `${mouseX}px`;
    target.style.left = `${mouseY}px`;
  });
};
