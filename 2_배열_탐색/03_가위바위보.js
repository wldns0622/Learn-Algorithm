// 가위 바위 보

// A, B 두 사람이 가위바위보 게임을 합니다.
// 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
// B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
// 1:가위, 2:바위, 3:보

const solution = (data) => {
  let answer = [];
  const [A, B] = data;
  
  for(let i=0; i<A.length; i++) {
    if(A[i] === B[i]) answer.push('D');
    else if (A[i]===1 && B[i]===3 || A[i]===2 && B[i]===1 || A[i]===3 && B[i]===2) answer.push('A');
    else answer.push('B');
  }
  return answer;
}

console.log(solution([[2, 3, 3, 1, 3], [1, 1, 2, 2, 3]]));