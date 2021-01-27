export const Parallex = {
  reverseOpacity: [2, 1],
  opacity: [0, 1],
  frame: [0, 60],
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
