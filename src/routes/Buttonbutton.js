import WorkTemplete from "../Components/WorkTemplete";
import "../scss/buttonbutton.scss";

export default function Buttonbutton({ stageWidth, stageHeight }) {
  return (
    <>
      <WorkTemplete
        text={"Buttonbutton"}
        next={"About"}
        stageWidth={stageWidth}
        stageHeight={stageHeight}
      />
    </>
  );
}
