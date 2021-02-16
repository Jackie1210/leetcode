function canPartition(nums: number[]): boolean {
  let sum = nums.reduce((acce, prev) => acce + prev, 0)
  const n = nums.length
  if (sum % 2 > 0) return false
  sum = sum / 2

  let dp = Array(n+1)

  for(let i = 0; i <= n; i++){
    dp[i] = Array(sum+1).fill(false)
  }

  for(let j = 0;j <= n;j++){
    dp[j][0] = true
  }

  for(let x = 1; x <= n; x++){
    for(let y = 1; y <= sum; y++){
      if (y - nums[x-1] < 0){
        dp[x][y] = dp[x-1][y]
      } else {
        dp[x][y] = dp[x-1][y] || dp[x-1][y - nums[x-1]]
      }
    }
  }

  return dp[n][sum]
}

console.log(canPartition([1, 5, 11, 5]))