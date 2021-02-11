import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import "../scss/changePage.scss";

export default function ChangePage({ change, setChange }) {
  const changePage = useRef();

  useEffect(() => {
    changePage.current.classList.add("active");
    changePage.current.style.backgroundColor = ColorArray[0];

    changePage.current.addEventListener("transitionend", () => {
      changePage.current.classList.remove("active");
      setChange(false);
    });
  });
  return <div id="changePage" ref={changePage}></div>;
}
