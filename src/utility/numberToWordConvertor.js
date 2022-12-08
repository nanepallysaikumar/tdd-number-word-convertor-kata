import { rules } from "../numberToWordConvertRules";

const numberToWordConvertor = (number) => {
  const numString = number.toString();

  for (const rule of rules) {
    if (rule.matches(numString)) {
      return rule.getReplacementText(numString);
    }
  }
  return numString;
};

export { numberToWordConvertor };
