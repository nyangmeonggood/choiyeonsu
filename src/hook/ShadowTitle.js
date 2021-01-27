import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import { SeparateText } from "../hook/SeperateText";
import "../scss/shadowTitle.scss";

export default function ShadowTitle({ text }) {
  const ShadowTitleRef = useRef();
  useEffect(() => {
    SeparateText(`shadow${text}`, text, "span");

    Object.values(ShadowTitleRef.current.children).forEach((item) => {
      let i = item.dataset.delay;
      item.style.transition = `color 0.5s 1s, text-stroke 0.5s 1s,
      text-stroke-color 0.5s 1s, transform 0.5s ${0.1 * i}s`;
    });

    setTimeout(() => {
      ShadowTitleRef.current.classList.add("active");
      let randomColor = Math.floor(Math.random() * ColorArray.length),
        longshadow = ``;

      for (let longshadows = 0; longshadows < 10; longshadows++) {
        longshadow +=
          (longshadow ? "," : "") +
          `${longshadows + 1}px ${longshadows + 1}px 0 ${
            ColorArray[randomColor]
          }`;
      }
      ShadowTitleRef.current.style.textShadow = longshadow;
    }, 1000);
  }, []);

  return (
    <h2 id={`shadow${text}`} className="shadowTitle" ref={ShadowTitleRef}></h2>
  );
}
