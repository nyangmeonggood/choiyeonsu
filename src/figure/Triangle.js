export default function Triangle({ color }) {
  return (
    <figure className="triangle">
      <svg x="0px" y="0px" viewBox="0 0 200 200" fill={color}>
        <polygon points="190,177.5 10,178.1 99.4,21.9 "></polygon>
      </svg>
    </figure>
  );
}
