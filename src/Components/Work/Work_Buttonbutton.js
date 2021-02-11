import img0 from "../../img/bb/bb_main.jpg";
import img1 from "../../img/bb/bb_1.jpg";
import img2 from "../../img/bb/bb_2.jpg";
import img3 from "../../img/bb/bb_3.jpg";
import img4 from "../../img/bb/bb_4.jpg";
import img5 from "../../img/bb/bb_5.jpg";
import img6 from "../../img/bb/bb_6.jpg";
import gif0 from "../../img/bb/m0.gif";
import gif1 from "../../img/bb/m1.gif";
import gif2 from "../../img/bb/m2.gif";

export default function WORK_BUTTONBUTTON() {
  return (
    <>
      <li className=" sgap">
        <div className="imgBox">
          <img src={img0} />
        </div>
      </li>
      <li>
        <div className="imgBox">
          <img src={img1} />
        </div>
      </li>

      <li className="multi start thumbnail">
        {document.body.clientWidth >= 900 && <>
          <div className="bigImg" style={{ width: "33.33%" }}>
            <img src={img4} className="m" />
          </div></>}
        <div className="textBox left">
          <h4>Thumbnail</h4>
          <p>
            각각 메인들의 이름과 설명은 썸네일에 표기됩니다. 전체적인 사이트의
            이미지와 어울릴 수 있게 <b>픽셀화 된 이미지</b>를 사용했습니다.
            그리고{" "}
            <b>반응형의 유무부터 해당 페이지의 기능적인 요소들에 대한 설명</b>이
            포함되어 있습니다.
          </p>
        </div>
        {document.body.clientWidth < 900 && <>
          <div className="bigImg" style={{ width: "100%" }}>
            <img src={img4} className="m" />
          </div></>}
      </li>

      <li className="multi end msgap">
        <div className="textBox">
          <h4>Changing Button</h4>
          <p>
            매번 사이트를 접속할 때마다 입장 버튼이 변경됩니다. 다양한 버튼들 중
            하나가 <b>무작위로 사이트의 메인화면</b>을 장식합니다. 흰 배경에
            버튼 하나. 다소 심심할 수 있는 부분입니다. 하지만 그로 인해 버튼
            하나에 더 집중되고 오래 기억되게 합니다.
          </p>
        </div>
      </li>

      <li>
        <div className="imgBox">
          <img src={img0} />
          <img src={gif0} className="gif" />
        </div>
      </li>

      <li className="multi end msgap">
        <div className="textBox left">
          <h4>Filter</h4>
          <p>
            버튼들의 <b>작동 조건에 따라 필터링 기능</b>을 사용할 수 있습니다. 여러 기능이 복합적으로 사용된 버튼의 경우 가장 중점이 되는 기능으로 필터링됩니다.
          </p>
        </div>
      </li>

      <li>
        <div className="imgBox right">
          <div className="gifBox">
            <img src={img3} />
            <img src={gif1} className="gif" />
          </div>
        </div>
      </li>

      <li className="multi center msgap">
        <div className="textBox">
          <h4>Interactive</h4>
          <p>
            입력창에 <b>입력하는 내용이 모든 버튼에 일괄 적용</b>됩니다. 이에 따라 적용된 모습을 즉각적으로 확인이 가능합니다. 그리고 <b>키 입력에 따라 변하는 메인 버튼</b>으로 페이지를 이용하는 사용자에게 흥미를 유발합니다.</p>
        </div>
      </li>

      <li>
        <div className="imgBox left">
          <div className="gifBox">
            <img src={img2} />
            <img src={gif2} className="gif" />
          </div>
        </div>
      </li>

      <li className="multi triple">
        <div className="textBox">
          <h4>Mobile</h4>
        </div>
        <div>
          <img src={img5} className="s" />
        </div>
        <div>
          <img src={img6} className="s" />
        </div>
      </li>
    </>
  );
}
