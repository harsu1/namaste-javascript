function findSum(n) {
  if (n !== 0) return n + findSum(n - 1);
  else return n;
}
console.log(findSum(3));
