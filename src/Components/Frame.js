import { useEffect, useRef } from "react";
import { ColorArray } from "../hook/Color";
import "../scss/frame.scss";

export default function Frame() {
  const frameRef = useRef(),
    currentRef = useRef();

  let scrollY,
    contentHeight,
    randomCurrentColor = Math.floor(Math.random() * ColorArray.length),
    currentColor = ColorArray[randomCurrentColor],
    reverseStart = 100000;

  const scrollEvent = () => {
    scrollY = window.scrollY;
    if (document.querySelector(".toNext"))
      contentHeight = document.querySelector(".toNext").offsetTop;
    reverseStart = contentHeight - window.innerHeight;

    setFrameParallex(frameRef.current, scrollY, reverseStart);

    currentRef.current.style.backgroundColor = currentColor;
    currentRef.current.style.width = `${(scrollY / reverseStart) * 100}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (frameRef.current) {
        scrollEvent();
      }
    });

    return window.removeEventListener("scroll", () => {
      if (frameRef.current) {
        scrollEvent();
      }
    });
  });

  return (
    <ul className="frame" ref={frameRef}>
      <li className="frameLeft vertical"></li>
      <li className="frameRight vertical"></li>
      <li className="frameTop horizon"></li>
      <li className="frameBottom horizon">
        <div className="current" ref={currentRef}></div>
      </li>
    </ul>
  );
}

const Parallex = {
  frame: [100, 90],
  opacity: [0, 1],
  horizonFrame: [0, 60],
  bottomFrameMobile: [0, 30],
  verticalFrame: [0, 100],
  verticalFrameMobile: [0, 20],
};

function setFrameParallex(target, scrollY, reverseStart) {
  let returnOpacityParallex,
    returnHorizonFrameParallex,
    returnVerticalFrameParallex,
    returnbottomFrameMobileParallex,
    relativeScrollY,
    duration;

  relativeScrollY = scrollY;
  duration = window.innerHeight / 2;

  if (scrollY <= reverseStart) {
    returnHorizonFrameParallex = returnParallex(
      Parallex.horizonFrame,
      relativeScrollY,
      duration,
      true
    );

    if (window.innerWidth < 900) {
      returnbottomFrameMobileParallex = returnParallex(
        Parallex.bottomFrameMobile,
        relativeScrollY,
        duration,
        true
      );
    }

    if (window.innerWidth > 900) {
      returnVerticalFrameParallex = returnParallex(
        Parallex.verticalFrame,
        relativeScrollY,
        duration,
        true
      );
    } else {
      returnVerticalFrameParallex = returnParallex(
        Parallex.verticalFrameMobile,
        relativeScrollY,
        duration,
        true
      );
    }

    returnOpacityParallex = returnParallex(
      Parallex.opacity,
      relativeScrollY,
      duration,
      true
    );
  } else {
    returnHorizonFrameParallex = returnReverseParallex(
      Parallex.horizonFrame,
      relativeScrollY,
      duration,
      reverseStart,
      false
    );

    if (window.innerWidth < 900) {
      returnbottomFrameMobileParallex = returnReverseParallex(
        Parallex.bottomFrameMobile,
        relativeScrollY,
        duration,
        false
      );
    }

    if (window.innerWidth > 900) {
      returnVerticalFrameParallex = returnReverseParallex(
        Parallex.verticalFrame,
        relativeScrollY,
        duration,
        reverseStart,
        false
      );
    } else {
      returnVerticalFrameParallex = returnReverseParallex(
        Parallex.verticalFrameMobile,
        relativeScrollY,
        duration,
        reverseStart,
        false
      );
    }

    returnOpacityParallex = returnReverseParallex(
      Parallex.opacity,
      relativeScrollY,
      duration,
      reverseStart,
      false
    );
  }

  // target.style.width = `${returnSizeParallex}vw`;
  // target.style.height = `${returnSizeParallex}vh`;
  target.style.opacity = returnOpacityParallex;

  target.querySelector(
    ".frameTop"
  ).style.height = `${returnHorizonFrameParallex}px`;

  if (window.innerWidth > 900) {
    target.querySelector(
      ".frameBottom"
    ).style.height = `${returnHorizonFrameParallex}px`;
  } else {
    target.querySelector(
      ".frameBottom"
    ).style.height = `${returnbottomFrameMobileParallex}px`;
  }

  Object.values(target.getElementsByClassName("vertical")).forEach((item) => {
    item.style.width = `${returnVerticalFrameParallex}px`;
  });
}

function returnParallex(target, relativeScrollY, duration, add) {
  let result;
  result = target[0] + ((target[1] - target[0]) * relativeScrollY) / duration;

  if (add && result >= target[1]) result = target[1];

  if (!add && result <= target[1]) result = target[1];
  return result;
}

function returnReverseParallex(
  target,
  relativeScrollY,
  duration,
  reverseStart,
  add
) {
  let result, relativeReverseScrollY;
  relativeReverseScrollY = relativeScrollY - reverseStart;
  result =
    target[1] + ((target[0] - target[1]) * relativeReverseScrollY) / duration;

  if (add && result >= target[0]) result = target[0];
  if (!add && result <= target[0]) result = target[0];

  return result;
}
