let Question = [
  '   + -- + - + -   ', //
  '   + --- + - +   ', //
  '   + -- + - + -   ', //
  '   + - + - + - +   ', //
];

function decodeData(data) {
  return data.reduce(function (acc, cur) {
    return acc + String.fromCharCode(parseInt(cur.replace(/ /g, '').replace(/\+/g, '1').replace(/\-/g, '0'), 2));
  }, '');
}

console.log(decodeData(Question));
