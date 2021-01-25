import { Red, Yellow, Blue } from "../hook/Color.js";

export default function Logo() {
  return (
    <svg x="0px" y="0px" viewBox="0 0 100 100">
      <circle cx="38.9" cy="37.8" r="19" fill={Red} />
      <rect
        x="67"
        y="32.6"
        transform="matrix(0.9507 -0.3101 0.3101 0.9507 -11.2381 23.4648)"
        width="2.3"
        height="29"
        fill={Blue}
      />
      <polygon points="63.8,81.1 38.9,74.4 57.1,56.1 " fill={Yellow} />
    </svg>
  );
}
