export const Parallex = {
  reverseOpacity: [2, 1],
  opacity: [0, 1],
  border: [0, 60],
  title: [50, 0],
  next: [25, 50],
  addNext:[0,2],
  divLineLeft:[50,33.33,40,50],
  divLineRight:[50,66.66,40,50]
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

  duration =  window.innerHeight;
  relativeScrollY = scrollY - part.offsetTop  - part.clientHeight + window.innerHeight

  if(relativeScrollY<=0)relativeScrollY = 0;
  returnPositionTranslate = -100 * relativeScrollY / duration;

  if(returnPositionTranslate >= 0 ) returnPositionTranslate = 0
  if(returnPositionTranslate <= -100 ) returnPositionTranslate = -100

  if(scrollY >= part.offsetTop + part.clientHeight - window.innerHeight){
    target.style.top = `${returnPositionTranslate}%`
  }else{
    target.style.top = `0%`
  }
}

export function setdivLineRefParallex(target,scrollY,moveStart,moveStart2,moveStart3,pos){

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
  if(pos === "left"){
    lineParallex = Parallex.divLineLeft
  }else if(pos === "right"){
    lineParallex = Parallex.divLineRight
  }

  let lineDuration = window.innerHeight / 2;

  let moveStartOffset1 = moveStart.offsetTop
  let moveStartOffset2 = moveStart2.offsetTop
  let moveStartOffset3 = moveStart3.offsetTop

  let relativeLineScrollY1 = scrollY - moveStartOffset1;
  let relativeLineScrollY2 = scrollY - moveStartOffset2;
  let relativeLineScrollY3 = scrollY - moveStartOffset3;
  let returnLeft;

  if(scrollY >= moveStartOffset1 && scrollY <= moveStartOffset1 + lineDuration){
    returnLeft = returndivLineLeft(relativeLineScrollY1,lineDuration,1,lineParallex)
  }else if(scrollY > moveStartOffset1 + lineDuration && scrollY < moveStartOffset2 ){
    returnLeft = lineParallex[1]
  }else if(scrollY >= moveStartOffset2 && scrollY <= moveStartOffset2 + lineDuration){
    returnLeft = returndivLineLeft(relativeLineScrollY2,lineDuration,2,lineParallex)
  }else if(scrollY > moveStartOffset2 + lineDuration && scrollY < moveStartOffset3 ){
    returnLeft = lineParallex[2]
  }else if(scrollY >= moveStartOffset3){
    returnLeft = returndivLineLeft(relativeLineScrollY3,lineDuration,3,lineParallex)
    if(returnLeft >= lineParallex[3]) returnLeft = lineParallex[3]
  }

  if(scrollY >= moveStartOffset1){
    target.style.left = `${returnLeft}%`;
  }else{
    target.style.left = `${lineParallex[0]}%`;
  }
}

function returndivLineLeft(relativeLineScroll,lineDuration,num,lineParallex){
  let result;
  result = lineParallex[num-1] +
  ((lineParallex[num] - lineParallex[num-1]) * relativeLineScroll) /
  lineDuration;

  return result;
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
  let targetChildren,returnAdd, relativeScrollY, duration;

  targetChildren = Object.values(target.children)

  duration = window.innerHeight / 4;
  relativeScrollY = scrollY - reverseStart - duration;

  returnAdd =
    Math.floor(Parallex.addNext[0] +
    ((Parallex.addNext[1] - Parallex.addNext[0]) * relativeScrollY) / duration);

  if (returnAdd >= Parallex.addNext[1]) returnAdd = Parallex.addNext[1];

  if(returnAdd >= 0){
    targetChildren.map((item,index) => {
      item.classList.remove("active")
      if(returnAdd >= index){
        return item.classList.add("active")        
      }
    })
  }else{
    targetChildren.map((item) => {
      item.classList.remove("active")
    })
  }
}