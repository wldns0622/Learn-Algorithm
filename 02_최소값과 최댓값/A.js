const arr = [10, 20, 30, 1, 2, 3, 5, 9, 11];

// 1. Math 객체 이용하기
console.log(`Math객체 이용 -> 최대값 : ${Math.max(...arr)}`);
console.log(`Math객체 이용 -> 최소값 : ${Math.min(...arr)}`);

// 2. 정렬 이용하기
const sortArr = [...arr].sort((a, b) => a - b);
console.log(`정렬 이용 -> 최대값 : ${sortArr[sortArr.length - 1]}`);
console.log(`정렬 이용 -> 최대값 : ${sortArr[0]}`);

// 3. 반복문 이용하기
let max = arr[0];
let min = arr[0];

for (let num of arr) {
  if (max < num) {
    max = num;
  }
  if (min > num) {
    min = num;
  }
}
console.log(max, min);

// 4. reduce 이용방법
const maxNum = arr.reduce((max, cur) => {
  return max < cur ? cur : max;
});
const minNum = arr.reduce((min, cur) => {
  return min > cur ? cur : min;
});
console.log(maxNum, minNum);
