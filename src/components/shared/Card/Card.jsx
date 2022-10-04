import "./card.scss";

const Card = ({ children, className = "" }) => {
  return <div className={`card ${className}`.trim()}>{children}</div>;
};

export default Card;
