import "./index.scss";

const CardPreview = ({ inputRef, addColumn }) => {
  return (
    <header className="kanban__header">
      <h1>Kanban</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={addColumn}>Add column</button>
      </div>
    </header>
  );
};

export default CardPreview;
