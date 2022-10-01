import mockData from "../../mockData";
import { useState } from "react";
import "./index.scss";

const Kanban = () => {
  const [data, setData] = useState(mockData);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e, candidate, columnId) => {
    const dataToTransfer = JSON.stringify({ candidate, columnId });

    e.dataTransfer.setData("dataToTransfer", dataToTransfer);
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
    <div className="kanban">
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
                    >
                      {name}
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Kanban;
