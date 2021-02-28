function rob(nums: number[]): number {
  const dp = []
  const n = nums.length
  if (n === 0){
    return 0
  }
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for(let i = 2; i < n; i++){
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i - 2])
  }

  return dp[n-1]
}