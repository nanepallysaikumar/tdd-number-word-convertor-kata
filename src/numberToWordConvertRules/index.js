import { zeroToWord } from "./zeroWordConvertor";
import { singleDigitWordConvertor } from "./singleDigitWordConvertor";
import { doubleDigitWordConvertor } from "./doubleDigitWordConvertor";
import { tripleDigitWordConvertor } from "./tripleDigitWordConvertor";
import { quadrupleDigitWordConvertor } from "./quadrupleDigitWordConvertor";

const rules = [
  zeroToWord,
  singleDigitWordConvertor,
  doubleDigitWordConvertor,
  tripleDigitWordConvertor,
  quadrupleDigitWordConvertor,
];

export { rules };
