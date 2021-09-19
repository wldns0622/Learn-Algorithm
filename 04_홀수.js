function solution(arr){
  return arr.filter((el) => el % 2);
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));