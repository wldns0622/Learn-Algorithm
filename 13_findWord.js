/*
문자찾기

한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에
몇 개 존재하는지 알아내는 프로그램을 작성하세요.

*/

const solution = (word, target) => {
    return word.split(target).length - 1;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));