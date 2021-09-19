// 가운데 문자 추력

// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를
// 출력하는 프로그램을 작성
// 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력

const solution = (word) => {
  let answer = '';
  let mid = Math.floor(word.length/2);
  if(word.length % 2) answer = word.substring(mid, mid+1);
  else answer = word.substring(mid-1, mid+1);
  return answer;
}

console.log(solution('study'));
console.log(solution('many'));