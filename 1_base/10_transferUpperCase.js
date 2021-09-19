// 대문자로 통일

// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 
// 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요. 

// const solution = (word) => {
//   return word.toUpperCase();
// }

const solution = (word) => {
  let answer = '';
  for(let char of word) {
    let charNum = char.charCodeAt();

    answer += charNum >= 97 && charNum <= 122 ? String.fromCharCode(charNum-32) : char;

  }
  return answer; 

}

console.log(solution('ItIsTimeToStudy'));