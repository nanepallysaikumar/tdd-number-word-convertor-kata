import { zeroToWord } from "./zeroWordConvertor";
import { singleDigitWordConvertor } from "./singleDigitWordConvertor";
import { doubleDigitWordConvertor } from "./doubleDigitWordConvertor";

const rules = [zeroToWord, singleDigitWordConvertor, doubleDigitWordConvertor];

export { rules };
