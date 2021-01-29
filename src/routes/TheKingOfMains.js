import WorkTemplete from "../Components/WorkTemplete";
import "../scss/theKingOfMains.scss";

export default function TheKingOfMains({ stageWidth, stageHeight }) {
  return (
    <>
      <WorkTemplete
        text={"theKingOfMains"}
        next={"Buttonbutton"}
        stageWidth={stageWidth}
        stageHeight={stageHeight}
      />
    </>
  );
}
