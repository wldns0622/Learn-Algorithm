// 합
function rcu(num) {
  if (num <= 1) {
    return 1;
  }
  return num + rcu(num - 1);
}
console.log('재귀' + rcu(100));
