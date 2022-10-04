import "./column.scss";

const Column = ({
  data,
  setData,
  columnId,
  columnTitle,
  candidates,
  handleCandidateClick,
  children,
}) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, columnId) => {
    let transferedData = JSON.parse(e.dataTransfer.getData("dataToTransfer"));

    if (transferedData.columnId === columnId) return;

    data[columnId].candidates = [
      ...data[columnId].candidates,
      transferedData.candidate,
    ];

    const filteredCandidates = data[transferedData.columnId].candidates.filter(
      (candidate) => candidate.id !== transferedData.candidate.id
    );

    data[transferedData.columnId].candidates = filteredCandidates;

    setData({ ...data });
  };

  return (
    <div
      key={columnId}
      className="kanban__column"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, columnId)}
    >
      <h1 className="column__title">{columnTitle}</h1>
      <div className="column__content">{children}</div>
    </div>
  );
};

export default Column;
