function solution(day, arr) {
  return arr.reduce((acc, cur) => cur % 10 === day ? acc + 1 : acc, 0);
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));