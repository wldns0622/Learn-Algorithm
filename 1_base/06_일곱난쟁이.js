function solution(arr){
  const TOTAL_TALL = arr.reduce((acc, cur) => acc+cur);
  const copyArr = [...arr];

  for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(TOTAL_TALL - (arr[i] + arr[j]) === 100) {
        copyArr.splice(j, 1);
        copyArr.splice(i, 1);
        break;
      }
    }
  }

  return copyArr;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));