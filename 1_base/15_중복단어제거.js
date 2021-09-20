// 중복단어 제거

// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램
// 문자열은 원래의 입력순서를 유지해야함

const solution = (words) => {
  let answer;
  
  answer = words.filter( (value, index) => {
    return words.indexOf(value) === index;
  });

  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));