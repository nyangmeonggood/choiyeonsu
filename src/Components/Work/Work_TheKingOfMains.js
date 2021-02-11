import imgIntro from "../../img/kom/kom_intro.jpg";
import imgMain from "../../img/kom/kom_main.jpg";
import kom_thumbnail from "../../img/kom/kom_thumbnail.jpg";
import kom_how from "../../img/kom/kom_how.jpg";
import kom_howGif from "../../img/kom/kom_how.gif";
import kom_mobile1 from "../../img/kom/kom_mobile1.jpg";
import kom_mobile2 from "../../img/kom/kom_mobile2.jpg";
import kom_arrowenter from "../../img/kom/kom_arrowenter.gif";
import kom_m from "../../img/kom/kom_m.jpg";
import kom_mGif from "../../img/kom/kom_m.gif";
import kom_spacebar from "../../img/kom/kom_spacebar.jpg";
import kom_spacebarGif from "../../img/kom/kom_spacebar.gif";

export default function WORK_THEKINGOFMAINS() {
  return (
    <>
      <li className="sgap">
        <div className="imgBox">
          <img src={imgIntro} alt="intro" />
        </div>
      </li>

      <li>
        <div className="imgBox">
          <img src={imgMain} alt="main" />
        </div>
      </li>

      <li className="multi center msgap">
        <div className="textBox">
          <h4>How To Use</h4>
          <p>
            조작법에 대해 설명을 제공합니다. <b>좌우 방향키를 이용</b>해서 이동이 가능하고 <b>마지막 탭에서 ENTER키</b>를 눌러 닫을 수 있습니다. <b>우측 상단의 SKIP 버튼</b>을 누르거나 통상적으로 취소키로 사용되는 <b>ESC키를 눌러서도 닫을 수</b> 있습니다.
        </p>
        </div>
      </li>

      <li>
        <div className="imgBox right">
          <div className="gifBox">
            <img src={kom_how} alt="how" />
            <img src={kom_howGif} className="gif" alt="howGif" />
          </div>
        </div>
      </li>

      <li className="multi start thumbnail">
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
        <div className="bigImg" style={{ width: document.body.clientWidth > 900 ? "33.33%" : "100%" }}>
          <img src={kom_thumbnail} className="m" alt="thumbnail" />
        </div>
      </li>

      <li className="multi center msgap">
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
            <img src={imgMain} alt="main" />
            <img src={kom_arrowenter} className="gif" alt="arrowenter" />
          </div>
        </div>
      </li>

      <li className="multi end msgap">
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
            <img src={kom_m} alt="m" />
            <img src={kom_mGif} className="gif" alt="mGif" />
          </div>
        </div>
      </li>
      <li>
        <div className="imgBox right">
          <div className="gifBox">
            <img src={kom_spacebar} alt="spacebar" />
            <img src={kom_spacebarGif} className="gif" alt="spacebarGif" />
          </div>
        </div>

      </li>

      <li className="multi triple">

        {document.body.clientWidth < 900 && <>
          <div className="textBox" style={{ marginBottom: "40px" }}>
            <h4>Mobile</h4>
            <p>
              'The king of Mains'의 모바일 버전은 데스크탑 버전에서의 모든 기능을
              이용할 수는 없습니다. 하지만 모바일 사이즈에서도 각 메인들을 확인 할
              수 있으며 새로운 창에서 해당 페이지를 이용하는 기능은 사용이
              가능합니다.
          </p>
          </div></>}

        <div>
          <img src={kom_mobile1} className="s" alt="mobile" />
        </div>
        <div>
          <img src={kom_mobile2} className="s" alt="mobile" />
        </div>

        {document.body.clientWidth >= 900 && <>
          <div className="textBox">
            <h4>Mobile</h4>
            <p>
              'The king of Mains'의 모바일 버전은 데스크탑 버전에서의 모든 기능을
              이용할 수는 없습니다. 하지만 모바일 사이즈에서도 각 메인들을 확인 할
              수 있으며 새로운 창에서 해당 페이지를 이용하는 기능은 사용이
              가능합니다.
          </p>
          </div></>}

      </li>
    </>
  );
}
