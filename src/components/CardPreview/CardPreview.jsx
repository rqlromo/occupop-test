import "./cardPreview.scss";

const CardPreview = ({ children, cardPreviewInfo, hideCardPreview }) => {
  const { name, image } = cardPreviewInfo;

  return (
    <>
      <div className="cardPreview__overlay" onClick={hideCardPreview} />
      <div className="cardPreview__content">
        <div className="cardPreview__image">
          <img src={image} alt={name} />
        </div>
        <div className="cardPreview__details">
          <h2 className="cardPreview__name">{cardPreviewInfo.name}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

export default CardPreview;
