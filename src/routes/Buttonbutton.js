import WorkTemplete from "../Components/WorkTemplete";
import "../scss/buttonbutton.scss";

export default function Buttonbutton({ stageWidth, stageHeight, change, setChange }) {
  return (
    <>
      <WorkTemplete
        text={"Buttonbutton"}
        next={"Contact"}
        stageWidth={stageWidth}
        stageHeight={stageHeight}
        change={change}
        setChange={setChange}
      />
    </>
  );
}
