import { zeroToWord } from "./zeroWordConvertor";
import { singleDigitWordConvertor } from "./singleDigitWordConvertor";
import { doubleDigitWordConvertor } from "./doubleDigitWordConvertor";
import { tripleDigitWordConvertor } from "./tripleDigitWordConvertor";

const rules = [
  zeroToWord,
  singleDigitWordConvertor,
  doubleDigitWordConvertor,
  tripleDigitWordConvertor,
];

export { rules };
