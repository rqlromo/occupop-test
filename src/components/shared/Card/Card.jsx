import "./card.scss";

const Card = ({
  children,
  candidate,
  columnId,
  handleCandidateClick,
  className,
}) => {
  const onDragStart = (e, candidate, columnId) => {
    const dataToTransfer = JSON.stringify({ candidate, columnId });

    e.dataTransfer.setData("dataToTransfer", dataToTransfer);
  };

  const { name } = candidate;

  return (
    <div
      className={`card ${className}`.trim()}
      onDragStart={(e) => onDragStart(e, candidate, columnId)}
      draggable
      onClick={() => handleCandidateClick(candidate)}
    >
      {name}
      {children}
    </div>
  );
};

export default Card;
