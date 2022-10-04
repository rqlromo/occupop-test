import { v4 as uuidv4 } from "uuid";
import { generateColumnId } from "./utils/generateColumnId";

const mockData = {
  [generateColumnId("application received")]: {
    columnTitle: "application received",
    candidates: [
      {
        id: uuidv4(),
        name: "Jon Snow",
        image: "http://localhost:3000/assets/images/jon_nieve.jpg",
        position: "Backend Developer",
        skills: [".Net"],
      },
      {
        id: uuidv4(),
        name: "Arya Stark",
        image: "http://localhost:3000/assets/images/arya_stark.jpg",
        position: "Frontend Developer",
        skills: ["React", "JavaScript", "HTML"],
      },
    ],
  },
  [generateColumnId("CEO phone screen")]: {
    columnTitle: "CEO phone screen",
    candidates: [
      {
        id: uuidv4(),
        name: "Sansa Stark",
        image: "http://localhost:3000/assets/images/sansa_stark.jpg",
        position: "Frontend Developer",
        skills: ["JavaScript", "HTML", "CSS"],
      },
      {
        id: uuidv4(),
        name: "Daenerys Targaryen",
        image: "http://localhost:3000/assets/images/daenerys_targaryen.jpg",
        position: "Backend Developer",
        skills: [".Net"],
      },
    ],
  },
  [generateColumnId("Technical test")]: {
    columnTitle: "Technical test",
    candidates: [
      {
        id: uuidv4(),
        name: "Ada Lovelace",
        image: "http://localhost:3000/assets/images/ada_lovelace.jpg",
        position: "Frontend Developer",
        skills: ["HTML", "CSS"],
      },
    ],
  },
  [generateColumnId("Candidate offer accepted")]: {
    columnTitle: "Candidate offer accepted",
    candidates: [
      {
        id: uuidv4(),
        name: "Raquel Romo Gomez",
        image: "http://localhost:3000/assets/images/raquel_romo_gomez.jpg",
        position: "Frontend Developer",
        skills: ["React", "React Hooks", "JavaScript", "HTML", "CSS"],
      },
    ],
  },
};

export default mockData;
