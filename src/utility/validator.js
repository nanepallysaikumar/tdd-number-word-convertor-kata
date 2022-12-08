const isNumberOverLimit = (value, maxNumLength) =>
  value.toString().length > maxNumLength ? true : false;

export { isNumberOverLimit };
