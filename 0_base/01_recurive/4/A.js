function recursive(stringNumber) {
  if (stringNumber.length <= 1) {
    return Number(stringNumber);
  }
  return Number(stringNumber.slice(-1)) + recursive(stringNumber.slice(0, -1));
}

console.log(recursive('123123'));
