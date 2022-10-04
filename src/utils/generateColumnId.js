import { v4 as uuidv4 } from "uuid";

export const generateColumnId = (title) => {
  const lowercaseColumnTitle = title.toLowerCase().split(" ").join("_");

  return `${lowercaseColumnTitle}-${uuidv4()}`;
};
