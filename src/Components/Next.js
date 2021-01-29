import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setNextParallex } from "../hook/Parallex";
import "../scss/next.scss";

export default function Next({ nextLink }) {
  let scrollY, contentHeight, reverseStart, nextBtn;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    nextBtn = document.querySelector(".nextBtn");

    if (document.querySelector(".toNext")) {
      contentHeight = document.querySelector(".toNext").offsetTop;
      reverseStart = contentHeight - window.innerHeight;
    }

    if (nextBtn) {
      setNextParallex(nextBtn, scrollY, reverseStart);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollEvent();
    });

    return window.removeEventListener("scroll", () => {
      scrollEvent();
    });
  });
  return (
    <Link className="nextBtn" to={`/${nextLink}`}>
      {nextLink}
    </Link>
  );
}
