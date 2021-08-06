// while (true) {
//   if (name.length === 1) {
//     result += name;
//     break;
//   }
//   let copyName = name.split('');
//   result += copyName.pop();
//   name = copyName.join('');
// }

function recursive(name) {
  if (name.length === 1) {
    return name;
  }
  return name.slice(-1) + recursive(name.slice(0, -1));
}

console.log(recursive('JungJiUn'));
