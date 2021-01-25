import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Parallex, setParallex } from "../hook/Parallex";
import "../scss/about.scss";

export default function Main() {
  const mainRef = useRef(),
    totalScroll = useRef(),
    parallexDuration = useRef(),
    numOfPart = useRef(),
    $parts = useRef(),
    mainHeight = useRef();
  let scrollY, currentPart;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    if (mainRef.current.offsetTop <= scrollY) {
      mainRef.current.classList.add("active");
    } else {
      mainRef.current.classList.remove("active");
    }

    currentPart = setCurrentPart(scrollY, mainRef);
    setPart(mainRef.current.children, currentPart);

    setParallex(
      document.querySelector(".part1"),
      1,
      scrollY,
      parallexDuration.current,
      Parallex.opacity
    );
  };

  useEffect(() => {
    mainHeight.current = mainRef.current.clientHeight;
    numOfPart.current = mainRef.current.children.length;
    parallexDuration.current = mainHeight.current / numOfPart.current;

    mainRef.current.style.height = `${100 * numOfPart.current}vh`;

    totalScroll.current = window.innerHeight + mainHeight.current;
    $parts.current = Object.values(mainRef.current.children);

    window.addEventListener("scroll", () => {
      if (mainRef.current) scrollEvent();
    });

    return window.removeEventListener("scroll", () => {
      if (mainRef.current) scrollEvent();
    });
  });

  useEffect(() => {
    document.querySelector("header").style.display = "block";
  }, []);

  return (
    <>
      <section id="main" ref={mainRef}>
        <div className="part part1">
          <Link to="/theKingOfMains">theKingOfMains</Link>
          <br />
          <Link to="/Buttonbutton">ButtonButton</Link>
        </div>
        <div className="part part2">2</div>
        <div className="part part3">3</div>
        <div className="part part4">4</div>
        <div className="part part5">5</div>
        <div className="part part6">6</div>
      </section>
    </>
  );
}

const setPart = (target, num) => {
  Object.values(target).forEach((item) => {
    item.classList.remove("active");
  });
  target[num].classList.add("active");
};

const setCurrentPart = (scrollY, target) => {
  let currentPart = Math.floor(
    (scrollY * target.current.children.length) / target.current.clientHeight - 1
  );

  if (currentPart < 0) currentPart = 0;
  if (currentPart > target.current.children.length - 1)
    currentPart = target.current.children.length - 1;

  return currentPart;
};
