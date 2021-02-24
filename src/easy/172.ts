function trailingZeroes(n: number): number {
  let res = 0
  let d = 5

  while (d <= n ){
    res += Math.floor(n / d)
    d *= 5
  }

  return res
}