import { ones } from "../constants/applicationConstants";

const singleDigitWordConvertor = {
  matches: (number) => number < 20,
  getReplacementText: (number) => ones[number],
};

export { singleDigitWordConvertor };
