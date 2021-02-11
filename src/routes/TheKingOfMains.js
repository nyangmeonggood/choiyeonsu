import WorkTemplete from "../Components/WorkTemplete";
import "../scss/theKingOfMains.scss";

export default function TheKingOfMains({ stageWidth, stageHeight, change, setChange }) {
  return (
    <>
      <WorkTemplete
        text={"theKingOfMains"}
        next={"Buttonbutton"}
        stageWidth={stageWidth}
        stageHeight={stageHeight}
        change={change}
        setChange={setChange}
      />
    </>
  );
}
