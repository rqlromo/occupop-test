import { useRef, useState } from "react";
import mockData from "../../mockData";
import useLocalStorageState from "../../hooks/useLocalStorage";
import "./index.scss";
import Header from "../Header";
import CardPreview from "../CardPreview";

const Kanban = () => {
  const inputRef = useRef();
  const [data, setData] = useLocalStorageState("kanban", mockData);
  const [cardPreviewInfo, setCardPreviewInfo] = useState(null);

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, candidate, columnId) {
    const dataToTransfer = JSON.stringify({ candidate, columnId });

    e.dataTransfer.setData("dataToTransfer", dataToTransfer);
  }

  function onDrop(e, columnId) {
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
  }

  function addColumn() {
    const titleColumn = inputRef.current.value;
    const lowerTitleColumn = titleColumn.toLowerCase().split(" ").join("_");

    const newColum = {
      [lowerTitleColumn]: {
        id: lowerTitleColumn,
        column: titleColumn,
        candidates: [],
      },
    };

    setData({
      ...data,
      ...newColum,
    });
  }

  function showCardPreview(columnId, candidate) {
    setCardPreviewInfo(candidate);
  }

  function hideCardPreview() {
    setCardPreviewInfo(null);
  }

  return (
    <div className="kanban">
      <Header inputRef={inputRef} addColumn={addColumn} />
      <main className="kanban__main">
        {Object.values(data).map(({ id: columnId, column, candidates }) => {
          return (
            <div
              key={columnId}
              className="kanban__column"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, columnId)}
            >
              <p className="column__title">{column}</p>
              <div className="column__content">
                {candidates &&
                  candidates.map((candidate) => {
                    const { id: candidateId, name } = candidate;

                    return (
                      <div
                        key={candidateId}
                        className="kanban__card"
                        onDragStart={(e) => onDragStart(e, candidate, columnId)}
                        draggable
                        onClick={() => showCardPreview(columnId, candidate)}
                      >
                        {name}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </main>
      {cardPreviewInfo && (
        <CardPreview
          cardPreviewInfo={cardPreviewInfo}
          hideCardPreview={hideCardPreview}
        />
      )}
    </div>
  );
};

export default Kanban;
