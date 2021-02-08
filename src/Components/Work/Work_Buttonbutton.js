import img1 from "../../img/bb/bb_1.jpg";
import img2 from "../../img/bb/bb_2.jpg";
import img3 from "../../img/bb/bb_3.jpg";
import img4 from "../../img/bb/bb_4.jpg";
import img5 from "../../img/bb/bb_5.jpg";
import img6 from "../../img/bb/bb_6.jpg";

export default function Work_Buttonbutton() {
  return (
    <>
      <li>
        <img src={img1} />
      </li>
      <li>
        <img src={img2} />
      </li>
      <li>
        <img src={img3} />
      </li>
      <li className="multi">
        <img src={img4} className="m" />
      </li>
      <li className="multi">
        <img src={img5} className="s" />
        <img src={img6} className="s" />
        <div className="textBox">
          <h4>서브제목</h4>
          <p>설명은 여기에</p>
        </div>
      </li>
    </>
  );
}
