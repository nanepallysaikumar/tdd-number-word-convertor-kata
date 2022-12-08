import { ones } from "../constants/applicationConstants";
import { numberToWordConvertor } from "../utility/numberToWordConvertor";

const tripleDigitWordConvertor = {
  matches: (number) => number.length === 3,
  getReplacementText: (number) => {
    if (number[1] === "0" && number[2] === "0")
      return `${ones[number[0]]} hundred`;
    else
      return `${ones[number[0]]} hundred and ${numberToWordConvertor(
        +(number[1] + number[2])
      )}`;
  },
};

export { tripleDigitWordConvertor };
