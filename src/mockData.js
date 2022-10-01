import { v4 as uuidv4 } from "uuid";

const mockData = {
  Application_received: {
    id: "Application_received",
    column: "Application received",
    candidates: [
      {
        id: uuidv4(),
        name: "Ada Lovelace",
        position: "Frontend Developer",
      },
      {
        id: uuidv4(),
        name: "Jon Nieve",
        position: "Backend Developer",
      },
      {
        id: uuidv4(),
        name: "Arya Stark",
        position: "Frontend Developer",
      },
    ],
  },
  CEO_Phone_Screen: {
    id: "CEO_Phone_Screen",
    column: "CEO Phone Screen",
    candidates: [
      {
        id: uuidv4(),
        name: "Sansa Stark",
        position: "Frontend Developer",
      },
      {
        id: uuidv4(),
        name: "Daenerys Targaryen",
        position: "Backend Developer",
      },
    ],
  },
  Technical_Test: {
    id: "Technical_Test",
    column: "Technical Test",
    candidates: [
      {
        id: uuidv4(),
        name: "Raquel Romo",
        position: "Frontend Developer",
      },
    ],
  },
};

export default mockData;
