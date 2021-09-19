function f(num) {
  return num <= 1 ? 1 : `${f(Math.floor(num / 2))}${num % 2}`;
}

console.log(f(11));
