import { ones } from "../constants/applicationConstants";
import { numberToWordConvertor } from "../utility/numberToWordConvertor";
import { getLastDigitsByCount } from "../utility/transformers";

const quadrupleDigitWordConvertor = {
  matches: (number) => number.length === 4,
  getReplacementText: (number) => {
    const lastThreeDigits = getLastDigitsByCount(number, 3);
    if (lastThreeDigits === 0) return `${ones[number[0]]} Thousand`;
    if (lastThreeDigits < 100)
      return `${ones[number[0]]} Thousand and ${numberToWordConvertor(
        lastThreeDigits
      )}`;
    return `${ones[number[0]]} Thousand ${numberToWordConvertor(
      lastThreeDigits
    )}`;
  },
};

export { quadrupleDigitWordConvertor };
