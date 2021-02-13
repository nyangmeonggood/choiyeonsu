import "../scss/sorry.scss";
import ShadowTitle from "../hook/ShadowTitle";
import ParticleCanvas from "./ParticleCanvas";
import { useEffect, useState } from "react";

export default function Sorry() {
    const [stageWidth, setStageWidth] = useState(window.innerWidth);
    const [stageHeight, setStageHeight] = useState(window.innerHeight);

    const setResize = () => {
        setStageWidth(window.innerWidth);
        setStageHeight(window.innerHeight);
    };

    // resize
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setResize(e);
        });

        return window.removeEventListener("resize", (e) => {
            setResize(e);
        });
    }, [stageWidth, stageHeight]);
    //** resize

    return (
        <>
            <section id="Sorry" >
                <div>
                    <ShadowTitle text={"Sorry"} />

                    <h3>포트폴리오 사이트는 리액트를 기반으로 제작되었습니다.<br />익스플로러에서는 리액트와 자바스크립트의 모든 기능을 사용하기가 어렵습니다.<br />보다 나은 감상을 위해 익스플로러 이외의 크롬, 사파리 등의 브라우저를 이용해<br />포트폴리오를 감상해주시길 부탁드립니다:)</h3>

                </div>
            </section>
            <ParticleCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
        </>
    );
}
