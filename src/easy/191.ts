//  位1的个数
function hammingWeight(n: number): number {
  let res = 0
  while(n !== 0){
      n = n & (n - 1)
      res++
  }

  return res
}