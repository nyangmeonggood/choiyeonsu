export default function Bar({ color,width }) {
  return (
    <figure className="square">
      <svg x="0px" y="0px" viewBox="0 0 200 200" fill={color}>
        <rect x={100 - width/2} y="10" width={width} height="180"></rect>
      </svg>
    </figure>
  );
}
