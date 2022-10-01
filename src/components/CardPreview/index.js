import "./index.scss";

const CardPreview = ({ cardPreviewInfo: candidate, hideCardPreview }) => {
  const { name, image, position, skills } = candidate;

  return (
    <>
      <div className="cardPreview__overlay" onClick={() => hideCardPreview()} />
      <div className="cardPreview__content">
        <div className="cardPreview__image">
          <img src={image} alt={name} />
        </div>
        <div className="cardPreview__details">
          <h2 className="cardPreview__name">{name}</h2>
          <ul className="cardPreview__list">
            <li>{position}</li>
            <li>{skills.join(", ")}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardPreview;
