function fibo(num) {
  if (num === 0) {
    return 0;
  } else if (num <= 2) {
    return 1;
  }
  return fibo(num - 2) + fibo(num - 1);
}

console.log(fibo(5)); // 5
console.log(fibo(7)); // 13
console.log(fibo(9)); // 34
console.log(fibo(11)); // 89
