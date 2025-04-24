function climbStairs(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let ways1 = 1;
  let ways2 = 2;
  let currentWays = 0;

  for (let i = 3; i <= n; i++) {
    currentWays = ways1 + ways2;
    ways1 = ways2;
    ways2 = currentWays;
  }

  return currentWays;
}

console.log("n=2 ->", climbStairs(2));
console.log("n=3 ->", climbStairs(3));
console.log("n=4 ->", climbStairs(4));
console.log("n=5 ->", climbStairs(5));
