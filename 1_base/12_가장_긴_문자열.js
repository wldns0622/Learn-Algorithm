// N개의 문자열이 입력되면 그 중 가장 긴 문자열을
// 출력하는 프로그램

const solution = (...data) => {
  let [num, ...arr] = data;
  return arr.reduce((acc, cur) => acc.length < cur.length ? cur : acc);
}

console.log(solution(5, 'teacher', 'time', 'student', 'beautiful', 'good'));