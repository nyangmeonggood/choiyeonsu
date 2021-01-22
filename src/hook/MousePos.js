import { useEffect, useState } from "react";

export const MousePosition = (radius) => {
  const [mousePos, setMousePos] = useState({
    x: undefined,
    y: undefined,
    radius: undefined,
  });

  useEffect(() => {
    const setCurrentPosition = (e) =>
      setMousePos({ x: e.clientX, y: e.clientY, radius: radius });
    window.addEventListener("mousemove", setCurrentPosition);

    return () => {
      window.removeEventListener("mousemove", setCurrentPosition);
    };
  });

  return mousePos;
};
