import { useEffect, useRef } from "react";
import "../scss/intro.scss";

export default function Intro({ setCompLoading }) {
  const introRef = useRef(""),
    titleRef = useRef(""),
    greetRef = useRef(""),
    personRef = useRef(""),
    greetEndRef = useRef("");

  const nextFunc = () => {
    introRef.current.classList.add("active");
    introRef.current.addEventListener("transitionend", () => {
      setCompLoading(true);
    });
  };

  useEffect(() => {
    greetRef.current.classList.add("active");
    animationEnd(greetRef, personRef);
    animationEnd(personRef, greetEndRef, nextFunc);
  });
  return (
    <>
      <section id="intro" ref={introRef}>
        <div className="title" ref={titleRef}>
          <p className="greet" ref={greetRef}>
            안녕하세요. 반갑습니다.
          </p>
          <ul className="person" ref={personRef}>
            <li>
              <span>
                <b>뛰는 사람</b> 위의,
              </span>
            </li>
            <li>
              <span>
                <b>나는 사람</b> 위의,
              </span>
            </li>
            <li>
              <span>
                <b>즐기는 사람</b>.
              </span>
            </li>
          </ul>
          <p className="greetEnd" ref={greetEndRef}>
            최연수입니다.
          </p>
        </div>
        {/* <div className="figureBox">
          <Circle color={Red} />
          <Triangle color={Yellow} />
          <Square color={Blue} />
        </div> */}
      </section>
    </>
  );
}

const animationEnd = (current, next, nextFunc) => {
  current.current.addEventListener("animationend", () => {
    next.current.classList.add("active");
    if (nextFunc) {
      setTimeout(() => nextFunc(), 1000);
    }
  });
};
