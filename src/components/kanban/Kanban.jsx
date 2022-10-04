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
                  data={data}
                  setData={setData}
                  columnId={columnId}
                  columnTitle={columnTitle}
                  candidates={candidates}
                  handleCandidateClick={handleCandidateClick}
                >
                  {candidates &&
                    candidates.map((candidate) => {
                      const { id: candidateId } = candidate;

                      return (
                        <Card
                          key={candidateId}
                          candidate={candidate}
                          columnId={columnId}
                          handleCandidateClick={handleCandidateClick}
                        />
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
