import imgIntro from "../../img/kom/kom_intro.jpg";
import img0 from "../../img/kom/kom_main.jpg";
import img1 from "../../img/kom/kom_1.jpg";
import img2 from "../../img/kom/kom_2.jpg";
import img3 from "../../img/kom/kom_3.jpg";
import img4 from "../../img/kom/kom_4.jpg";
import img5 from "../../img/kom/kom_5.jpg";
import img6 from "../../img/kom/kom_6.jpg";
import gif0 from "../../img/kom/m0.gif";
import gif2 from "../../img/kom/m2.gif";
import gif3 from "../../img/kom/m3.gif";

export default function WORK_THEKINGOFMAINS() {
  return (
    <>
      <li className="sgap">
        <div className="imgBox">
          <img src={imgIntro} />
        </div>
      </li>

      <li>
        <div className="imgBox">
          <img src={img0} />
        </div>
      </li>

      <li className="multi start">
        <div className="textBox right">
          <h4>Thumbnail</h4>
          <p>
            좌측 하단에 각각 메인들의 썸네일과 정보가 표기됩니다. 전체적인 사이트의
            이미지와 어울릴 수 있게 <b>픽셀화 된 이미지</b>를 사용했습니다.
            그리고{" "}
            <b>반응형의 유무부터 해당 페이지의 기능적인 요소들에 대한 설명</b>이
            포함되어 있습니다.
          </p>
        </div>
        <div className="bigImg" style={{ width: "33.33%" }}>
          <img src={img4} className="m" />
        </div>
      </li>

      <li>
        <div className="imgBox">
          <img src={img1} />
        </div>
      </li>

    <li className="multi center">
      <div className="textBox">
        <h4>Keyboard Function</h4>
        <p>
          격투게임이 모티브인만큼 키보드를 이용한 기능들을 구현해봤습니다.
          메인들을 키보드의 <b> 방향키를 이용해 이동</b>하고{" "}
          <b>enter키를 이용해 선택</b>합니다. 선택을 하면 상하좌우 중 랜덤한
          방향으로 선택한 메인이 노출됩니다.
        </p>
      </div>
    </li>

      <li>
        <div className="imgBox right">
          <div className="gifBox">
            <img src={img0} />
            <img src={gif0} className="gif" />
          </div>
        </div>
      </li>

      <li className="multi end">
        <div className="textBox">
          <h4>Keyboard Function</h4>
          <p>노출 된 모달화면에서는{" "}
            <b>M키를 이용해 데스크탑-모바일 간의 화면전환</b>이 가능하고{" "}
            <b>spaceBar 버튼을 이용해 새 창</b>에서 메인을 만나볼 수 있습니다.
            그리고 <b>esc키를 이용해 해당 모달을 닫은</b> 후 다른 메인으로
            이동이 가능합니다.
          </p>
        </div>
      </li>

      <li className=" sgap">
        <div className="imgBox left">
          <div className="gifBox">
            <img src={img2} />
            <img src={gif2} className="gif" />
          </div>
        </div>
      </li>
      <li>
        <div className="imgBox right">
          <div className="gifBox">
            <img src={img3} />
            <img src={gif3} className="gif" />
          </div>
        </div>

      </li>
      
      <li className="multi triple">
        <div>
          <img src={img5} className="s" />
        </div>
        <div>
          <img src={img6} className="s" />
        </div>
        <div className="textBox">
          <h4>Mobile</h4>
          <p>
            'The king of Mains'의 모바일 버전은 데스크탑 버전에서의 모든 기능을
            이용할 수는 없습니다. 하지만 모바일 사이즈에서도 각 메인들을 확인 할
            수 있으며 새로운 창에서 해당 페이지를 이용하는 기능은 사용이
            가능합니다.
          </p>
        </div>
      </li>
    </>
  );
}
