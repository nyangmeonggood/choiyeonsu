export const Parallex = {
  reverseOpacity: [2, 1],
  opacity: [0, 1],
  border: [0, 60],
  title: [50, 0],
  next: [25, 50],
  addNext: [0, 2],
  divLineLeft: [50, 33.33, 32, 50],
  divLineRight: [50, 66.66, 32, 50],
  divLineLeftMobile: [50, 15, 20, 50],
  divLineRightMobile: [50, 85, 20, 50],
  InfoBoxWidth: [0, 33.33],
  InfoBoxPos: [50, 32],
  InfoBoxPosMobile: [50, 20],
  InfoBoxWidthMobile: [0, 70],
  InfoBoxOpacity: [0, 1],
  balloon: [-105, 0],
  balloonWidth: [33.33, 68],
  balloonText: [100, -45],
  abilitys: [-100, 100],
  timeLine: [0, -100],
};

export function setParallex(
  target,
  partIndex,
  scrollY,
  parallexDuration,
  parallexAction,
  action
) {
  let returnParallex, relativeScrollY;

  relativeScrollY = scrollY - (partIndex - 1) * parallexDuration;

  returnParallex =
    parallexAction[0] +
    ((parallexAction[1] - parallexAction[0]) * relativeScrollY) /
    parallexDuration;

  if (returnParallex >= parallexAction[1]) returnParallex = parallexAction[1];

  if (action === 1) target.style.opacity = returnParallex;
  if (action === 2) target.style.borderWidth = `${returnParallex}px`;
}

function returnParallex(target, relativeScrollY, duration, add) {
  let result;
  result = target[0] + ((target[1] - target[0]) * relativeScrollY) / duration;

  if (add && result >= target[1]) result = target[1];

  if (!add && result <= target[1]) result = target[1];
  return result;
}

function returnReverseParallex(target, relativeScrollY, duration, add) {
  let result;
  result = target[1] + ((target[0] - target[1]) * relativeScrollY) / duration;

  if (add && result >= target[0]) result = target[0];
  if (!add && result <= target[0]) result = target[0];

  return result;
}

export function setTitleParallex(target, scrollY) {
  let returnOpacity, returnTranslate, relativeScrollY, duration;

  duration = window.innerHeight / 2;
  relativeScrollY = scrollY - duration;

  returnOpacity = 1 - (1 * relativeScrollY) / duration;
  returnTranslate = 50 - (50 * (1 * relativeScrollY)) / duration;

  if (returnOpacity <= 0) returnOpacity = 0;
  if (returnTranslate <= 0) returnTranslate = 0;
  if (returnOpacity >= 1) returnOpacity = 1;
  if (returnTranslate >= 50) returnTranslate = 50;

  target.style.opacity = returnOpacity;
  target.style.top = `${returnTranslate}%`;
}

export function setPositionParallex(part, target, scrollY) {
  let returnPositionTranslate, relativeScrollY, duration;

  duration = window.innerHeight;
  relativeScrollY =
    scrollY - part.offsetTop - part.clientHeight + window.innerHeight;

  if (relativeScrollY <= 0) relativeScrollY = 0;
  returnPositionTranslate = (-100 * relativeScrollY) / duration;

  if (returnPositionTranslate >= 0) returnPositionTranslate = 0;
  if (returnPositionTranslate <= -100) returnPositionTranslate = -100;

  if (scrollY >= part.offsetTop + part.clientHeight - window.innerHeight) {
    target.style.top = `${returnPositionTranslate}%`;
  } else {
    target.style.top = `0%`;
  }
}

export function setdivLineRefParallex(
  target,
  scrollY,
  moveStart,
  moveStart2,
  moveStart3,
  pos
) {
  //height
  let heightDuration = window.innerHeight / 2;
  let relativeHeightScrollY = scrollY - window.innerHeight;
  let returnHeight = (100 * relativeHeightScrollY) / heightDuration;

  if (returnHeight <= 0) returnHeight = 0;
  if (returnHeight >= 100) returnHeight = 100;

  target.style.height = `${returnHeight}%`;
  //**height

  //left
  let lineParallex;
  if (pos === "left") {
    if (window.innerWidth > 900) {
      lineParallex = Parallex.divLineLeft;
    } else {
      lineParallex = Parallex.divLineLeftMobile;
    }
  } else if (pos === "right") {
    if (window.innerWidth > 900) {
      lineParallex = Parallex.divLineRight;
    } else {
      lineParallex = Parallex.divLineRightMobile;
    }
  }

  let lineDuration = window.innerHeight / 2;

  let moveStartOffset1 = moveStart.offsetTop;
  let moveStartOffset2 = moveStart2.offsetTop - window.innerHeight;
  let moveStartOffset3 = moveStart3.offsetTop;

  let relativeLineScrollY1 = scrollY - moveStartOffset1;
  let relativeLineScrollY2 = scrollY - moveStartOffset2;
  let relativeLineScrollY3 = scrollY - moveStartOffset3;
  let returnLeft;

  if (
    scrollY >= moveStartOffset1 &&
    scrollY <= moveStartOffset1 + lineDuration
  ) {
    returnLeft = returndivLine(
      relativeLineScrollY1,
      lineDuration,
      1,
      lineParallex
    );
  } else if (
    scrollY > moveStartOffset1 + lineDuration &&
    scrollY < moveStartOffset2
  ) {
    returnLeft = lineParallex[1];
  } else if (
    scrollY >= moveStartOffset2 &&
    scrollY <= moveStartOffset2 + lineDuration
  ) {
    returnLeft = returndivLine(
      relativeLineScrollY2,
      lineDuration,
      2,
      lineParallex
    );
  } else if (
    scrollY > moveStartOffset2 + lineDuration &&
    scrollY < moveStartOffset3
  ) {
    returnLeft = lineParallex[2];
  } else if (scrollY >= moveStartOffset3) {
    if (document.body.clientWidth >= 900) {
      returnLeft = returndivLine(
        relativeLineScrollY3,
        lineDuration / 2,
        3,
        lineParallex
      );
    }
    else if (document.body.clientWidth < 900) {
      returnLeft = returndivLine(
        relativeLineScrollY3,
        lineDuration / 3,
        3,
        lineParallex
      );
    }
    if (returnLeft >= lineParallex[3]) returnLeft = lineParallex[3];
  }

  if (scrollY >= moveStartOffset1) {
    target.style.left = `${returnLeft}%`;
  } else {
    target.style.left = `${lineParallex[0]}%`;
  }
}

function returndivLine(relativeLineScroll, lineDuration, num, lineParallex) {
  let result;
  result =
    lineParallex[num - 1] +
    ((lineParallex[num] - lineParallex[num - 1]) * relativeLineScroll) /
    lineDuration;

  return result;
}

export function setInfoBoxParallex(target, scrollY, moveStart, moveStart2) {
  let picBox = target.querySelector(".content .pic");
  let picRight = target.querySelector(".content .right");
  let picBalloon = target.querySelector(".right .balloon");
  let balloonText = target.querySelector(".balloon .textBox p");
  let circles = Object.values(target.querySelectorAll(".circle"));

  let lineDuration = window.innerHeight / 2;

  let moveStartOffset1 = moveStart.offsetTop;
  let moveStartOffset2 = moveStart2.offsetTop - window.innerHeight;

  let relativeScrollY1 = scrollY - moveStartOffset1;
  let relativeScrollY2 = scrollY - moveStartOffset2;

  let returnWidth, returnPos, returnOpacity, returnBalloon, returnBalloonWidth, returnCurrentBalloon, returnBalloonText;

  if (scrollY < moveStartOffset1) {
    //part1 start
    if (window.innerWidth > 900) {
      returnWidth = Parallex.InfoBoxWidth[0];
    } else {
      returnWidth = Parallex.InfoBoxWidthMobile[0];
    }
    returnPos = Parallex.InfoBoxPos[0];
    returnOpacity = Parallex.InfoBoxOpacity[0];
  } else if (scrollY >= moveStartOffset1 && scrollY < moveStartOffset2) {
    //part1 lineOpen end

    if (window.innerWidth > 900) {
      returnWidth = returnParallex(
        Parallex.InfoBoxWidth,
        relativeScrollY1,
        lineDuration,
        true
      );
    } else {
      returnWidth = returnParallex(
        Parallex.InfoBoxWidthMobile,
        relativeScrollY1,
        lineDuration,
        true
      );
    }
    returnOpacity = returnParallex(
      Parallex.InfoBoxOpacity,
      relativeScrollY1,
      lineDuration,
      true
    );
    returnPos = Parallex.InfoBoxPos[0];
  } else if (scrollY >= moveStartOffset2) {
    //part1 lineCloseStart

    if (window.innerWidth > 900) {
      returnWidth = returnReverseParallex(
        Parallex.InfoBoxWidth,
        relativeScrollY2,
        lineDuration,
        false
      );
      returnPos = returnParallex(
        Parallex.InfoBoxPos,
        relativeScrollY2,
        lineDuration,
        false
      );
    } else {
      returnWidth = returnReverseParallex(
        Parallex.InfoBoxWidthMobile,
        relativeScrollY2,
        lineDuration,
        false
      );
      returnPos = returnParallex(
        Parallex.InfoBoxPosMobile,
        relativeScrollY2,
        lineDuration,
        false
      );
    }
    returnOpacity = returnReverseParallex(
      Parallex.InfoBoxOpacity,
      relativeScrollY2,
      lineDuration,
      false
    );
  }

  if (scrollY <= moveStartOffset1 + lineDuration) {
    returnBalloon = Parallex.balloon[0]
    returnBalloonWidth = Parallex.balloonWidth[0]

  } else if (scrollY > moveStartOffset1 + lineDuration && scrollY < moveStartOffset2) {
    returnBalloon = returnParallex(
      Parallex.balloon,
      relativeScrollY1 - lineDuration,
      lineDuration,
      true
    );
    returnBalloonWidth = Parallex.balloonWidth[0]
  } else if (scrollY >= moveStartOffset2) {
    returnBalloonWidth = returnParallex(
      Parallex.balloonWidth,
      relativeScrollY2,
      lineDuration,
      true
    );
  }

  if (scrollY < moveStartOffset1 + lineDuration * 2) {
    returnCurrentBalloon = Parallex.addNext[0]
    returnBalloonText = Parallex.balloonText[0]
    circles.forEach((item) => {
      item.classList.remove("active")
    })
  } else if (scrollY >= moveStartOffset1 + lineDuration * 2 && scrollY < moveStartOffset2) {

    returnBalloonText = returnParallex(
      Parallex.balloonText,
      relativeScrollY1 - lineDuration * 2,
      lineDuration,
      false
    );

    returnCurrentBalloon = Math.floor(returnParallex(
      Parallex.addNext,
      relativeScrollY1 - lineDuration * 2,
      lineDuration,
      true
    )
    );

    circles.forEach((item, index) => {
      item.classList.remove("active")

      if (index <= returnCurrentBalloon + 1) {
        return item.classList.add("active")
      }
    }
    )

  }

  picBox.style.width = `${returnWidth}%`;
  picBox.style.left = `${returnPos}%`;
  picBox.style.opacity = returnOpacity;
  picBalloon.style.transform = `translateX(${returnBalloon}%)`;
  picRight.style.width = `${returnBalloonWidth}%`;
  balloonText.style.transform = `translate(-50%,${returnBalloonText}%)`;
  picBalloon.style.opacity = returnOpacity;
  picBox.style.filter = `saturate(${returnOpacity})`;

  if (returnOpacity === 1) {
    picBox.classList.add("active");
  } else {
    picBox.classList.remove("active");
  }
}

export function setAbility(target, scrollY, moveStart, order) {
  let duration = window.innerHeight;
  let moveParellexStart = moveStart.offsetTop + duration * 0.5 * order;
  let relativeScroll = scrollY - moveParellexStart;

  let returnTranslate = returnParallex(
    Parallex.abilitys,
    relativeScroll,
    duration,
    true
  );

  if (returnTranslate <= Parallex.abilitys[0])
    returnTranslate = Parallex.abilitys[0];

  if (returnTranslate >= 0) {
    target.classList.add("active");
  } else {
    target.classList.remove("active");
  }

  target.querySelector(
    ".blind"
  ).style.transform = `translateX(${returnTranslate}%)`;
}

export function setTimelineParallex(target, scrollY) {
  let slide = target.querySelector(".timeLine");
  let slideLi = Object.values(slide.children);
  let duration = window.innerHeight;
  let moveStart = target.offsetTop;
  let relativeScroll = scrollY - moveStart;

  let returnTranslate = returnParallex(
    Parallex.timeLine,
    relativeScroll,
    duration,
    false
  );

  if (returnTranslate <= Parallex.timeLine[1])
    returnTranslate = Parallex.timeLine[1];

  if (returnTranslate >= Parallex.timeLine[0])
    returnTranslate = Parallex.timeLine[0];

  slideLi.forEach((item) => {
    if (duration * 0.95 >= item.getBoundingClientRect().top) {
      return item.classList.add("active");
    } else {
      return item.classList.remove("active");
    }
  });

  slide.style.transform = `translate(-50%, ${returnTranslate}%)`;
}

export function setTimelineParallexMobile(target) {
  let slide = target.querySelector(".timeLine");
  let slideLi = Object.values(slide.children);
  let duration = window.innerHeight;

  slideLi.forEach((item) => {
    if (duration * 0.8 >= item.getBoundingClientRect().top) {
      return item.classList.add("active");
    } else {
      return item.classList.remove("active");
    }
  });
}

export function setNextParallex(target, scrollY, reverseStart) {
  let returnTop, relativeScrollY, duration;

  duration = window.innerHeight / 2;
  relativeScrollY = scrollY - reverseStart;

  returnTop =
    Parallex.next[0] +
    ((Parallex.next[1] - Parallex.next[0]) * relativeScrollY) / duration;

  if (returnTop <= Parallex.next[0]) returnTop = Parallex.next[0];
  if (returnTop >= Parallex.next[1]) returnTop = Parallex.next[1];

  target.style.top = `${returnTop}%`;
}

export function setNextFigureParallex(target, scrollY, reverseStart) {
  let targetChildren, returnAdd, relativeScrollY, duration;

  targetChildren = Object.values(target.children);

  duration = window.innerHeight / 6;
  relativeScrollY = scrollY - reverseStart - duration;

  returnAdd = Math.floor(
    Parallex.addNext[0] +
    ((Parallex.addNext[1] - Parallex.addNext[0]) * relativeScrollY) / duration
  );

  if (returnAdd >= Parallex.addNext[1]) returnAdd = Parallex.addNext[1];

  if (returnAdd >= 0) {
    targetChildren.forEach((item, index) => {
      item.classList.remove("active");

      if (returnAdd >= index) {
        return item.classList.add("active");
      }
    });
  } else {
    targetChildren.forEach((item) => {
      item.classList.remove("active");
    });
  }
}
