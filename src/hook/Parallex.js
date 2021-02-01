export const Parallex = {
  reverseOpacity: [2, 1],
  opacity: [0, 1],
  border: [0, 60],
  title: [50, 0],
  next: [25, 50],
  addNext:[0,2]
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