// 봉우리

// 지도 정보가 N * N 격자판에 주어집니다.
// 격자에는 그 지역의 높이가 쓰여있습니다. 격자판의 숫자 중 자신의 상하좌우
// 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇개있는지 알아내는 프로그램을
// 작성하세요. (격자의 가장자리는 0으로 초기화 되어있다고 가정)

// const solution = (data) => {
//   let answer = 0;

//   let arr = [[0, 0, 0, 0, 0, 0, 0]];
//   data.forEach((value) => {
//     arr.push([0, ...value, 0]);
//   })
//   arr.push([0, 0, 0, 0, 0, 0, 0]);

//   for(let x=1; x<arr.length-1; x++) {
//     for(let y=1; y<arr.length-1; y++) {
//       let v = arr[x][y];
//       if(v>arr[x-1][y] && v>arr[x+1][y] && v>arr[x][y-1] && v>arr[x][y+1]) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }

const solution = (arr) => {
  let answer=0;
  let n=arr.length;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];

  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      let flag = 1;
      for(let k=0; k<4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if(flag) {
        answer++;
      }
    }
  }

  return answer;
}

const data = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
let result = solution(data);
console.log(result);