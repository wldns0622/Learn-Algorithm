const solution = (word) => {
    return word.split('')
        .map((a) => a === 'A' ? '#' : a)
        .join('');
}

console.log(solution('BANANA'));