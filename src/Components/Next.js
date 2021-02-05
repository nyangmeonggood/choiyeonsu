import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setNextFigureParallex, setNextParallex } from "../hook/Parallex";
import Circle from "../figure/Circle";
import Triangle from "../figure/Triangle";
import Bar from "../figure/Bar";
import "../scss/next.scss";

export default function Next({ nextLink }) {
  let scrollY,
    contentTop,
    reverseStart,
    toNext,
    nextBtn,
    nextPer,
    scrollTimeout;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    toNext = document.querySelector(".toNext");
    nextBtn = document.querySelector(".nextBtn");
    nextPer = document.querySelector(".nextPer");

    if (document.querySelector(".toNext")) {
      contentTop = document.querySelector(".toNext").offsetTop;
      reverseStart = contentTop - window.innerHeight;

      if (scrollY >= reverseStart) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          window.scrollTo({
            top: reverseStart,
            behavior: "smooth",
          });
          clearTimeout(scrollTimeout);
        }, 500);
      } else {
        clearTimeout(scrollTimeout);
      }
    }

    if (toNext && scrollY === document.body.clientHeight - window.innerHeight) {
      clearTimeout(scrollTimeout);
      toNext.classList.add("pop");
      // scrollTimeout = setTimeout(() => {
      //   toNext.querySelector("a").click();
      // }, 500);
    } else if (
      toNext &&
      scrollY !== document.body.clientHeight - window.innerHeight
    ) {
      toNext.classList.remove("pop");
    }

    if (nextBtn) {
      setNextParallex(nextBtn, scrollY, reverseStart);
      setNextFigureParallex(nextPer, scrollY, reverseStart);
    }
  };

  useEffect(() => {
    clearTimeout(scrollTimeout);
    window.scroll(0, 0);
    window.addEventListener("scroll", () => {
      scrollEvent();
    });

    return window.removeEventListener("scroll", () => {
      scrollEvent();
    });
  });
  return (
    <div className="toNext">
      <Link className="nextBtn" to={`/${nextLink}`}>
        <div className="nextPer">
          <Circle />
          <Bar width={30} />
          <Triangle />
        </div>
        {nextLink}
      </Link>
    </div>
  );
}
