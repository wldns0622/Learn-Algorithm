// 대소문자 변환

// 대문자와 소문자가 같이 존재하는 문자열을 입력받아
// 대문자는 소문자로 소문자는 대문자로 변환하여 출력

const solution = (word) => {
  let answer = '';

  for(let char of word) {
    let num = char.charCodeAt();
    if(num >= 65 && num <= 90) answer += String.fromCharCode(num+32);
    else if(num >=97 && num <= 122) answer += String.fromCharCode(num-32);
  }

  return answer;
}


console.log(solution('StuDY'));