const isNumberOverLimit = (value, maxNumLength) =>
  value.toString().length > maxNumLength ? true : false;

const isNumeric = (value) => (!/^[0-9]+$/.test(value) ? false : true);

export { isNumberOverLimit, isNumeric };
