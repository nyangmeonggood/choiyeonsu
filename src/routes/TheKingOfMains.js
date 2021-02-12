import WorkTemplete from "../Components/WorkTemplete";
import "../scss/theKingOfMains.scss";

export default function TheKingOfMains({ stageWidth, stageHeight, change, setChange, device }) {
  return (
    <>
      <WorkTemplete
        text={"theKingOfMains"}
        next={"Buttonbutton"}
        stageWidth={stageWidth}
        stageHeight={stageHeight}
        change={change}
        setChange={setChange}
        device={device}
      />
    </>
  );
}
