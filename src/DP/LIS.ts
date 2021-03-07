/**
 * 最长递增子序列
 * @param nums 
 * @returns 
 */
function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0
  const len = nums.length
  const dp = Array(len + 1).fill(1)

  dp[0] = 1

  for(let i = 1; i <= len; i++){
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 最长连续递增子序列
          dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp.reduce((acce, prev) => Math.max(acce, prev), Number.MIN_SAFE_INTEGER)
}

console.log(lengthOfLIS([4,10,4,3,8,9]))