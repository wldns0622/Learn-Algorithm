// 큰 수 출력하기

// N개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램
// 첫 번째 수는 무조건 출력한다

const solution = (data) => {
  let answer = [data[0]];
  for(let i=1; i<data.length; i++) {
    if(data[i-1] < data[i]) {
      answer.push(data[i]);
    }
  }
  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));