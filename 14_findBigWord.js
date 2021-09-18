/*

문제 : 대문자 찾기

한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지
알아내는 프로그램을 작성하세요.

입력  : 'KoreaTimeGood'

*/

// const solution = (word) => {
//     let upperWord = word.toUpperCase();
//     return upperWord.split('').reduce((acc, cur, idx) => {
//         return cur === word[idx] ? acc + 1 : acc;
//     }, 0);
// }


//문자를 아스키코드로 바꿧을때 65 ~ 90까지 대문자 97 ~ 122까지가 소문자다.

const solution = (word) => {
    let answer = 0;
    for (let i of word) {
        let num = i.charCodeAt();
        num >= 65 && num <= 90 ? answer++ : null;
    }
    return answer;
}



console.log(solution('KoreaTimeGood'));