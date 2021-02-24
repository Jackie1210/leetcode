function singleNumber(nums: number[]): number {
  let res = 0

  nums.forEach(n => res ^= n)

  return res
}