// 격자판 최대합 구하기

// 5 * 5 격자판에서 행의합, 열의합, 대각의 합중 가장 큰 합을 출력한다.

const data = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]

const solution = (data) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let raw = column = diagonal = reDiagonal = 0;
  
  for(let i=0; i<data.length; i++) {
    raw = column = 0;
    diagonal += data[i][i];
    reDiagonal += data[i][data.length-1-i];

    for(let j=0; j<data.length; j++) {
      raw += data[i][j];
      column += data[j][i];
    }
    
    answer = Math.max(answer, raw, column);
  }
  
  answer = Math.max(answer, diagonal, reDiagonal);

  return answer;

}

const result = solution(data);
console.log(result);