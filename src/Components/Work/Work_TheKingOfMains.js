import img1 from "../../img/kom/kom_1.jpg";
import img2 from "../../img/kom/kom_2.jpg";
import img3 from "../../img/kom/kom_3.jpg";
import img4 from "../../img/kom/kom_4.jpg";
import img5 from "../../img/kom/kom_5.jpg";
import img6 from "../../img/kom/kom_6.jpg";
import git1 from "../../img/kom/m1.gif";

export default function Work_TheKingOfMains() {
  return (
    <>
      <li className="multi end">
        <div className="textBox">
          <h4>서브제목</h4>
          <p>설명은 여기에</p>
        </div>
        <div className="bigImg">
          <img src={img4} className="m" />
        </div>
      </li>
      <li className="multi end">
        <div className="textBox">
          <h4>서브제목</h4>
          <p>
            메인 선택시 팝업 형식으로 등장합니다.
            <br />
            우측 하단에 페이지 기능에 대한 설명이 표기됩니다. 선택 창에서 M
            버튼을 이용해 사이즈별 레이아웃 전환이 가능합니다. 스페이스바 버튼을
            이용해 새 창에서 페이지를 확인할 수 있습니다.
          </p>
        </div>
      </li>
      <li>
        <img src={img1} />
        <p className="desc">Enter키로 입력 시 모달 형식으로 해당 메인 선택</p>
      </li>
      <li>
        <img src={git1} />
        <p className="desc">M 키를 입력 시 피시-모바일 레이아웃 전환 가능</p>
      </li>
      <li>
        <img src={img3} />
        <p className="desc">Spacebar 키를 입력 시 해당 메인 새 창으로 열기</p>
      </li>
      <li className="multi triple">
        <div>
          <img src={img5} className="s" />
        </div>
        <div>
          <img src={img6} className="s" />
        </div>
        <div className="textBox">
          <h4>서브제목</h4>
          <p>설명은 여기에</p>
        </div>
      </li>
    </>
  );
}
