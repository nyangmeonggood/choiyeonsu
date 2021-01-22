export default function Square({ color }) {
  return (
    <figure className="square">
      <svg x="0px" y="0px" viewBox="0 0 200 200" fill={color}>
        <rect x="10" y="10" width="180" height="180"></rect>
      </svg>
    </figure>
  );
}
