import { ones, tens } from "../constants/applicationConstants";

const doubleDigitWordConvertor = {
  matches: (number) => number.length == 2,
  getReplacementText: (number) => {
    return `${tens[number[0]]} ${ones[number[1]]}`;
  },
};

export { doubleDigitWordConvertor };
