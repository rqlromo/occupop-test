import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    // id: uuidv4(),
    id: "Candidate_application_received",
    column: "Candidate application received",
    candidates: [
      {
        id: uuidv4(),
        name: "Ada Lovelace",
      },
      {
        id: uuidv4(),
        name: "Jon Nieve",
      },
      {
        id: uuidv4(),
        name: "Arya Stark",
      },
    ],
  },
  {
    // id: uuidv4(),
    id: "Caroline(CEO)_Phone_Screen",
    column: "Caroline(CEO) Phone Screen",
    candidates: [
      {
        id: uuidv4(),
        name: "Sansa Stark",
      },
      {
        id: uuidv4(),
        name: "Daenerys Targaryen",
      },
    ],
  },
  {
    // id: uuidv4(),
    id: "Technical_Test",
    column: "Technical Test",
    candidates: [
      {
        id: uuidv4(),
        name: "Raquel Romo",
      },
    ],
  },
];

export default mockData;
