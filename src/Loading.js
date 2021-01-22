import { useEffect } from "react";
import Circle from "./figure/Circle";
import Triangle from "./figure/Triangle";
import Square from "./figure/Square";
import "./scss/loading.scss";

export default function Loading({ isLoading, setIsLoading, compIsLoading }) {
  let loading = -1,
    loadingInterval;

  useEffect(() => {
    if (!isLoading) {
      const loadingFigure = document.querySelector(".figureBox").children;
      loadingInterval = setInterval(() => {
        loading += 1;
        if (loading > 2) loading = 0;
        loadingFunc(loading, loadingFigure);
      }, 1000);
    }
    document.getElementById("loading").addEventListener("transitionend", () => {
      clearInterval(loadingInterval);
      setIsLoading(true);
      compIsLoading(true);
    });
  }, [setIsLoading]);
  return (
    <div id="loading">
      <div className="figureBox">
        <Circle color={"#e00808"} />
        <Triangle color={"#ffcc33"} />
        <Square color={"#0bceda"} />
      </div>
    </div>
  );
}

const loadingFunc = (loading, target) => {
  Object.values(target).map((item) => {
    item.classList.remove("active");
  });
  target[loading].classList.add("active");
};
