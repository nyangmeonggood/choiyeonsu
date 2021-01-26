import { useEffect, useRef } from "react";
import Circle from "../figure/Circle";
import Triangle from "../figure/Triangle";
import Square from "../figure/Square";
import { Red, Yellow, Blue } from "../hook/Color.js";
import "../scss/loading.scss";

export default function Loading({ isLoading, setIsLoading }) {
  let loading = useRef(-1),
    loadingInterval = useRef();

  useEffect(() => {
    if (!isLoading) {
      const loadingFigure = document.querySelector(".figureBox").children;
      loadingInterval.current = setInterval(() => {
        loading.current += 1;
        if (loading.current > 2) loading.current = 0;
        loadingFunc(loading.current, loadingFigure);
      }, 1000);
    }
    document.getElementById("loading").addEventListener("transitionend", () => {
      clearInterval(loadingInterval.current);
      setIsLoading(true);
    });
  }, [isLoading, setIsLoading]);
  return (
    <div id="loading">
      <div className="figureBox">
        <Circle color={Red} />
        <Triangle color={Yellow} />
        <Square color={Blue} />
      </div>
    </div>
  );
}

const loadingFunc = (loading, target) => {
  Object.values(target).forEach((item) => {
    item.classList.remove("active");
  });
  target[loading].classList.add("active");
};
