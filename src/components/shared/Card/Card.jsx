import "./card.scss";

const Card = ({ candidate, columnId, handleCandidateClick }) => {
  const onDragStart = (e, candidate, columnId) => {
    const dataToTransfer = JSON.stringify({ candidate, columnId });

    e.dataTransfer.setData("dataToTransfer", dataToTransfer);
  };

  const { name } = candidate;

  return (
    <div
      className="kanban__card"
      onDragStart={(e) => onDragStart(e, candidate, columnId)}
      draggable
      onClick={() => handleCandidateClick(candidate)}
    >
      {name}
    </div>
  );
};

export default Card;
