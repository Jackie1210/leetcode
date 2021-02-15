function maxEnvelopes(envelopes: number[][]): number {
  if (envelopes.length === 0) return 0
  const sortArr = envelopes.sort((a,b) => a[0] == b[0] ? b[1]-a[1]:a[0]-b[0]).map(item => item[1])

  return lengthOfLIS(sortArr)
};

function lengthOfLIS(nums: number[]): number {
if (nums.length === 0) return 0
const len = nums.length
const dp = Array(len + 1).fill(1)

dp[0] = 1

for(let i = 1; i <= len; i++){
  for (let j = 0; j < i; j++) {
    if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

return dp.reduce((acce, prev) => Math.max(acce, prev), Number.MIN_SAFE_INTEGER)
}