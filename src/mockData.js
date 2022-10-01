import { v4 as uuidv4 } from "uuid";

const mockData = {
  application_received: {
    id: "application_received",
    column: "application received",
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
  CEO_phone_screen: {
    id: "CEO_phone_screen",
    column: "CEO phone screen",
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
  technical_test: {
    id: "technical_test",
    column: "technical test",
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
