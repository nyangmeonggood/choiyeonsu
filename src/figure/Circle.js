export default function Circle({ color }) {
  return (
    <figure className="circle">
      <svg x="0px" y="0px" viewBox="0 0 200 200" fill={color}>
        <g>
          <circle cx="100" cy="100" r="90"></circle>
        </g>
      </svg>
    </figure>
  );
}
