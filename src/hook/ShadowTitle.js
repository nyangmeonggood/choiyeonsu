import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import { SeparateText } from "../hook/SeperateText";
import "../scss/shadowTitle.scss";

export default function ShadowTitle({ id, text }) {
  const ShadowTitleRef = useRef();
  let shadowId = id ? `${id}` : `shadow${text}`;
  useEffect(() => {
    SeparateText(shadowId, text, "span");

    Object.values(ShadowTitleRef.current.children).forEach((item) => {
      let i = item.dataset.delay;
      item.style.transition = `color 0.5s 1s, text-stroke 0.5s 1s,
      text-stroke-color 0.5s 1s, transform 0.5s ${0.1 * i}s`;
    });

    setTimeout(() => {
      if (ShadowTitleRef.current) {
        ShadowTitleRef.current.classList.add("active");
        let randomColor = Math.floor(Math.random() * ColorArray.length),
          longshadow = ``;

        for (let longshadows = 0; longshadows < 10; longshadows++) {
          longshadow +=
            (longshadow ? "," : "") +
            `${longshadows + 1}px ${longshadows + 1}px 0 ${
              text === "theKingOfMains" ? "#00006a" : ColorArray[randomColor]
            }`;
        }
        ShadowTitleRef.current.style.textShadow = longshadow;
        ShadowTitleRef.current.style.transition = `text-shadow 1s 2s`;
      }
    }, 1000);
  }, [shadowId, text]);

  return <div id={shadowId} className="shadowTitle" ref={ShadowTitleRef}></div>;
}
