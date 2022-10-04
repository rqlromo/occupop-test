import "./column.scss";

const Column = ({ onDrop, columnTitle, children }) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="kanban__column"
      onDragOver={(e) => onDragOver(e)}
      onDrop={onDrop}
    >
      <h1 className="column__title">{columnTitle}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Column;
