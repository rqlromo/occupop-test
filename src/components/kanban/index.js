import mockData from "../../mockData";
import { useState } from "react";
import "./index.scss";

const Kanban = () => {
  const [data, setData] = useState(mockData);

  return (
    <div className="kanban">
      {data.map(({ id: columnId, column, candidates }) => {
        return (
          <div key={columnId} className="kanban__column">
            <p className="column__title">{column}</p>
            <div className="column__content">
              {candidates &&
                candidates.map(({ id, name }) => (
                  <div key={id} className="kanban__card">
                    {name}
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Kanban;
