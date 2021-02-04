import { useCallback, useEffect, useRef } from "react";
import {
  setAbility,
  setdivLineRefParallex,
  setInfoBoxParallex,
  setPositionParallex,
  setTimelineParallex,
  setTitleParallex,
} from "../hook/Parallex";
import Frame from "../Components/Frame";
import ShadowTitle from "../hook/ShadowTitle";
import CursorCanvas from "../Components/CursorCanvas.js";
import Next from "../Components/Next";
import faceImage from "../img/face_circle.png";
import Logo from "../figure/Logo.js";
import Circle from "../figure/Circle";
import Bar from "../figure/Bar";
import Triangle from "../figure/Triangle";
import { ColorArray, abilityColorArray } from "../hook/Color.js";
import "../scss/about.scss";

export default function About({ stageWidth, stageHeight }) {
  const aboutRef = useRef(),
    divLineLeftRef = useRef(),
    divLineRightRef = useRef();

  const maxbGCanvasNumber = 30;

  const $AbilityBg = useRef(),
    $bGCanvas = useRef(),
    $bgArray = useRef(),
    $ctxbGCanvas = useRef();

  let scrollY, title;

  const scrollEvent = (part) => {
    scrollY = window.scrollY;
    title = document.querySelector(".shadowTitle");

    setTitleParallex(title, scrollY);

    setActive(aboutRef.current, scrollY);
    setPart(aboutRef.current, scrollY);
    setPositionParallex(
      part[1],
      document.querySelector(".part2 .content"),
      scrollY
    );
    setPositionParallex(
      part[2],
      document.querySelector(".part3 .content"),
      scrollY
    );

    setInfoBoxParallex(part[1], scrollY, part[1], part[2]);
    part[1].querySelector(
      ".content .pic img"
    ).style.width = part[1].querySelector(".content .pic .bg").style.width = `${
      stageWidth * 0.45
    }px`;

    for (let i = 0; i < 4; i++) {
      setAbility(
        part[2].querySelector(`.content ul li:nth-of-type(${i + 1})`),
        scrollY,
        part[2],
        i
      );
    }

    setTimelineParallex(part[3], scrollY);

    if (divLineLeftRef.current && divLineRightRef.current) {
      setdivLineRefParallex(
        divLineLeftRef.current,
        scrollY,
        part[1],
        part[2],
        part[3],
        "left"
      );
      setdivLineRefParallex(
        divLineRightRef.current,
        scrollY,
        part[1],
        part[2],
        part[3],
        "right"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (aboutRef.current) {
        scrollEvent(aboutRef.current.children);
      }
    });

    return window.removeEventListener("scroll", () => {
      if (aboutRef.current) {
        scrollEvent(aboutRef.current.children);
      }
    });
  });

  const bgAnimate = useCallback(() => {
    requestAnimationFrame(bgAnimate);
    $ctxbGCanvas.current.clearRect(
      0,
      0,
      $ctxbGCanvas.current.canvas.width,
      $ctxbGCanvas.current.canvas.height
    );

    for (var i = 0; i < $bgArray.current.length; i++) {
      $bgArray.current[i].update($ctxbGCanvas.current);
    }
  }, []);

  useEffect(() => {
    $bgArray.current = [];
    $bGCanvas.current.width = stageWidth;
    $bGCanvas.current.height = stageHeight;

    for (let i = 0; i < maxbGCanvasNumber; i++) {
      let x = Math.random() * (stageWidth * 0.5 - 40) + 20,
        y = Math.random() * (stageHeight - 40) + 20,
        dx = Math.random() * 2 - 1,
        dy = Math.random() * 2 - 1,
        figure = Math.floor(Math.random() * 3),
        angle = figure + 2,
        color = abilityColorArray[Math.floor(Math.random() * 4)];

      $bgArray.current.push(
        new SetbGCanvas(x, y, dx, dy, stageWidth, stageHeight, angle, color)
      );
    }
  }, []);

  useEffect(() => {
    $ctxbGCanvas.current = $bGCanvas.current.getContext("2d");
    bgAnimate();
  }, [bgAnimate]);

  return (
    <>
      <section id="about" ref={aboutRef}>
        <div className="part part1">
          <ShadowTitle text={"AboutMe"} />
        </div>
        <div className="part part2">
          <div className="content">
            <div className="left">
              <p>CHOI</p>
              <p>YEONSU</p>
              <span>Web Publisher</span>
              <span>Frontend Developer</span>
            </div>
            <div className="pic">
              <img src={faceImage} alt="" />
              <div className="bg">
                <Circle color={ColorArray[1]} />
                <Bar width={10} color={ColorArray[1]} />
                <Bar width={10} color={ColorArray[2]} />
                <Bar width={10} color={ColorArray[1]} />
                <Triangle color={ColorArray[0]} />
              </div>
            </div>
          </div>
          <div className="right">
            <h2>소개글 제목</h2>
            <p>
              안녕하세요.
              <b>최연수입니다.</b>
              소개글 들어갈 위치.. 소개글 들어갈 위치 내용. 소개글 들어갈 위치..
              소개글 들어갈 위치 내용.소개글 들어갈 위치.. 소개글 들어갈 위치
              내용. 소개글 들어갈 위치.. 소개글 들어갈 위치 내용. 소개글 들어갈
              위치.. 소개글 들어갈 위치 내용.소개글 들어갈 위치.. 소개글 들어갈
              위치 내용. 소개글 들어갈 위치.. 소개글 들어갈 위치 내용. 소개글
              들어갈 위치.. 소개글 들어갈 위치 내용.소개글 들어갈 위치.. 소개글
              들어갈 위치 내용. 소개글 들어갈 위치.. 소개글 들어갈 위치 내용.
              소개글 들어갈 위치.. 소개글 들어갈 위치 내용.소개글 들어갈 위치..
              소개글 들어갈 위치 내용.
            </p>
          </div>
        </div>

        <div className="part part3">
          <div className="content">
            <div id="abilityBG" ref={$AbilityBg}>
              <canvas ref={$bGCanvas}></canvas>
            </div>
            <ul>
              <li>
                <div className="blind"></div>
                <span className="html">HTML</span>
              </li>
              <li>
                <div className="blind"></div>
                <span className="css">CSS, SCSS</span>
              </li>
              <li>
                <div className="blind"></div>
                <span className="js">JavaScript, JQuery</span>
              </li>
              <li>
                <div className="blind"></div>
                <span className="react">React.js</span>,
                <span className="reactnative"> React.Native</span>
              </li>
            </ul>
            <p className="certificate">
              워드프로세서 1급, 컴퓨터활용능력 2급, 웹디자인기능사
            </p>
          </div>
        </div>

        <div className="part part4">
          <h2>TimeLine</h2>
          <ul className="timeLine">
            <li className="birth">
              <h6>생년월일</h6>
              <b>1993.10.27</b>
            </li>

            <li className="school">
              <h6>학력</h6>
              <b>2012.2 </b>
              <p>양산고등학교 졸업</p>
            </li>

            <li className="school">
              <h6>학력</h6>
              <b>2012.3</b>
              <p>
                홍익대학교 세종캠퍼스
                <br />
                E-마케팅학과 입학
              </p>
            </li>

            <li className="army">
              <h6>군 복무</h6>
              <b>2014.02 ~ 2016.01</b>
              <p>해양경찰 수경 만기제대</p>
            </li>

            <li className="school">
              <h6>학력</h6>
              <b>2017.2 ~ 2018.1</b>
              <p>
                중국 선양시 동북대학교
                <br />
                교환학생 과정 수료
              </p>
            </li>

            <li className="other">
              <h6>대외활동 (동아리)</h6>
              <b>2017.02 ~ 2017.07</b>
              <p>동북대학교 국제교류동아리 공명활동</p>
              <span>동아리 주간 프로그램 기획 및 홍보</span>
              <span>조성아 코스메틱 브랜드 홍보프로모션 진행</span>
            </li>

            <li className="other">
              <h6>대외활동 (봉사활동)</h6>
              <b>2017.06</b>
              <p>중국 선양한인회</p>
              <span>
                선양한인회 주최의 백일장
                <br />
                행사 진행 및 시설정비
              </span>
            </li>

            <li className="job">
              <h6>인턴</h6>
              <b>2017.12 ~ 2018.02</b>
              <p>중국기업 연변한동조진무역유한공사 인턴근무</p>
              <span>동북대학교 교환학생 프로그램 홍보영상 제작</span>
            </li>

            <li className="school">
              <h6>학력</h6>
              <b>2019.2</b>
              <p>
                홍익대학교 세종캠퍼스
                <br />
                E-마케팅학과 졸업
              </p>
            </li>

            <li className="job">
              <h6>경력</h6>
              <b>2019.10 - 2020.09</b>
              <p>뮬라웨어</p>
              <span>웹개발팀, IMC팀 근무</span>
              <span>
                자사몰 홈페이지 퍼블리싱 업무
                <br />및 자사 온라인 컨텐츠 코딩 관련 업무
              </span>
            </li>
          </ul>
        </div>
        <Next nextLink={"theKingOfMains"} />
      </section>
      <Frame />
      <CursorCanvas stageWidth={stageWidth} stageHeight={stageHeight} />
      <div className="divLine divLineLeft" ref={divLineLeftRef}></div>
      <div className="divLine divLineRight" ref={divLineRightRef}></div>
    </>
  );
}

const setPart = (target, scrollY) => {
  Object.values(target.children).forEach((item) => {
    if (scrollY > item.offsetTop) item.classList.add("on");
  });
};

const setActive = (target, scrollY) => {
  Object.values(target.children).forEach((item) => {
    item.classList.remove("active");

    if (scrollY === 0) return;

    if (item.offsetTop <= scrollY) {
      item.classList.add("active");
    }
  });
};

class SetbGCanvas {
  constructor(x, y, dx, dy, stageWidth, stageHeight, angle, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = Math.random() * 60 + 5;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.angle = angle;
    this.figureAngle = (Math.PI * 2) / this.angle;
    this.color = color;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = this.color;
    if (this.angle === 2) {
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    } else {
      ctx.translate(this.x, this.y);
      ctx.rotate(
        Math.PI / this.angle +
          Math.atan2(
            this.stageWidth / 2 - this.x,
            -this.stageHeight / 2 + this.y
          )
      );

      for (let i = 0; i < this.angle; i++) {
        let px = Math.sin(this.figureAngle * i) * this.size,
          py = Math.cos(this.figureAngle * i) * this.size;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
    }
    ctx.fill();
    ctx.restore();
  }

  update(ctx) {
    if (this.x + this.size > this.stageWidth || this.x - this.size < 0) {
      this.dx *= -1;
    }
    if (this.y + this.size > this.stageHeight || this.y - this.size < 0) {
      this.dy *= -1;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw(ctx);
  }
}
