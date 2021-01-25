export const Parallex = {
  opacity: [0, 1],
};

export function setParallex(
  target,
  partIndex,
  scrollY,
  parallexDuration,
  parallexAction
) {
  let returnParallex, relativeScrollY;

  relativeScrollY = scrollY - (partIndex - 1) * parallexDuration;

  returnParallex =
    parallexAction[0] +
    ((parallexAction[1] - parallexAction[0]) * relativeScrollY) /
      parallexDuration;

  if (returnParallex >= parallexAction[1]) returnParallex = parallexAction[1];

  target.style.opacity = returnParallex;
}
