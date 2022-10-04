import "./card.scss";

const Card = ({ candidate, handleCandidateClick, className = "" }) => {
  const { name } = candidate;

  return (
    <div
      className={`card ${className}`.trim()}
      onClick={() => handleCandidateClick(candidate)}
    >
      {name}
    </div>
  );
};

export default Card;
