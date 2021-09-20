// 점수 계산

const solution = (data) => {
  let score = 0;
  return data.reduce((total, value) => {
    score = value ? score + 1 : 0;
    return total + score;
  }, 0);
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));