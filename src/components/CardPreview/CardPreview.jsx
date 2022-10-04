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
        {children}
      </div>
    </>
  );
};

export default CardPreview;
