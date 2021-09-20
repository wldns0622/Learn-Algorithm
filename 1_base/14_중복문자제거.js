// 중복문자 제거

// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고
// 출력하는 프로그램, 제거된 문자열의 문자는 원래 문자열의 순서를 유지

// 입력: ksekkset
// 출력: kset

const solution = (word) => {
  let answer = '';

  for(let i=0; i<word.length; i++) {
    if(answer.indexOf(word[i]) === -1) {
      answer += word[i];
    }
  }

  return answer;
}

console.log(solution('ksekkset'));