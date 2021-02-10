import WorkTemplete from "../Components/WorkTemplete";
import "../scss/buttonbutton.scss";

export default function Buttonbutton({ stageWidth, stageHeight }) {
  return (
    <>
      <WorkTemplete
        text={"Buttonbutton"}
        next={"Contact"}
        stageWidth={stageWidth}
        stageHeight={stageHeight}
      />
    </>
  );
}
