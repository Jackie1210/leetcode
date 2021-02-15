function maxSubArray(nums: number[]): number {
  let dp = Array(nums.length)

  if (nums.length === 0) return 0

  dp[0] = nums[0]

  for (let i = 1; i < dp.length; i++){
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
  }

  let res = Number.MIN_SAFE_INTEGER

  res = dp.reduce((acce, prev) => Math.max(acce, prev), res)

  return res
}
