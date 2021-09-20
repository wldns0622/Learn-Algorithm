// 등수 구하기

const solution = (data) => {
  let rank = [];
  for(let i=0; i<data.length; i++) {
    let ranking = 1;
    
    for(let j=0; j<data.length; j++){
      if(data[i] < data[j]) {
        ranking++;
      }
    }
    rank.push(ranking);
  }

  return rank;
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([10, 10, 20, 20, 30, 40, 50]));