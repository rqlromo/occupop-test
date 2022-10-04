import { useState } from "react";
import mockData from "../../mockData";
import useLocalStorageState from "../../hooks/useLocalStorage";
import "./kanban.scss";
import Header from "./Header";
import CardPreview from "../CardPreview";
import AddColumnForm from "./AddColumnForm/AddColumnForm";
import Column from "./Column/Column";
import Card from "../shared/Card/Card";
import { generateColumnId } from "../../utils/generateColumnId";
import Draggable from "./Draggable/Draggable";

const Kanban = () => {
  const [data, setData] = useLocalStorageState("kanban", mockData);
  const [cardPreviewInfo, setCardPreviewInfo] = useState(null);
  const [shouldShowCardPreview, setShouldShowCardPreview] = useState(false);

  function addColumn(columnTitle) {
    const newColum = {
      [generateColumnId(columnTitle)]: {
        columnTitle,
        candidates: [],
      },
    };

    setData({
      ...data,
      ...newColum,
    });
  }

  function hideCardPreview() {
    setShouldShowCardPreview(false);
    setCardPreviewInfo(null);
  }

  function handleCandidateClick(candidate) {
    setCardPreviewInfo(candidate);
    setShouldShowCardPreview(true);
  }

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
      <Header>
        <AddColumnForm addColumn={addColumn} />
      </Header>
      <main className="kanban__main">
        {data &&
          Object.entries(data).map(
            ([columnId, { columnTitle, candidates }]) => {
              return (
                <Column
                  key={columnId}
                  columnTitle={columnTitle}
                  onDrop={(e) => onDrop(e, columnId)}
                >
                  {candidates &&
                    candidates.map((candidate) => {
                      const { id: candidateId } = candidate;

                      return (
                        <div
                          className="card-wrapper"
                          onClick={() => handleCandidateClick(candidate)}
                        >
                          <Draggable info={{ candidate, columnId }}>
                            <Card
                              key={candidateId}
                              candidate={candidate}
                              columnId={columnId}
                              draggableData={{ candidate, columnId }}
                              handleCandidateClick={handleCandidateClick}
                            >
                              {candidate.name}
                            </Card>
                          </Draggable>
                        </div>
                      );
                    })}
                </Column>
              );
            }
          )}
      </main>
      {shouldShowCardPreview && (
        <CardPreview
          cardPreviewInfo={cardPreviewInfo}
          hideCardPreview={hideCardPreview}
        >
          <div className="cardPreview__details">
            <h2 className="cardPreview__name">{cardPreviewInfo.name}</h2>
            <ul className="cardPreview__list">
              <li>{cardPreviewInfo.position}</li>
              <li>{cardPreviewInfo.skills.join(", ")}</li>
            </ul>
          </div>
        </CardPreview>
      )}
    </div>
  );
};

export default Kanban;
