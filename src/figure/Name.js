export default function Name({ color, size }) {
  return (
    <>
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
        style={{ stroke: color, width: `${size}px` }}
      >
        <path d="M45.3,159.3c0-28,24.5-50.8,54.8-50.8s54.8,22.7,54.8,50.8" />
        <line x1="25" y1="86.3" x2="175" y2="86.3" />
        <line x1="100" y1="86.3" x2="100" y2="39" />
      </svg>
      {/* choi */}
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 100 200"
        style={{ strokel: color, width: `${size / 2}px` }}
      >
        <path d="M100,141c-21,0-38-18.4-38-41s17-41,38-41" />
      </svg>
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 100 200"
        style={{ strokel: color, width: `${size / 2}px` }}
      >
        <path class="st0" d="M0,59c21,0,38,18.4,38,41s-17,41-38,41" />
      </svg>
      {/* yeon */}
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
        style={{ strokel: color, width: `${size}px` }}
      >
        <path
          class="st0"
          d="M45.3,159.3c0-28,24.5-50.8,54.8-50.8s54.8,22.7,54.8,50.8"
        />
      </svg>
      {/* su */}
    </>
  );
}
