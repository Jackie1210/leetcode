function canPartitionKSubsets(nums: number[], k: number): boolean {
  const sum = nums.reduce((acce, prev) => acce + prev, 0)

  if (sum % k !== 0) return false
  const buckets = Array(k).fill(0)
  const target = sum / k

  return dfs(nums, 0, buckets, target)

}

function dfs(nums: number[],index: number, buckets: number[], target: number): boolean{
  if (index === nums.length){
    return buckets.every(item => item === target)
  }
  for(let i = 0; i < buckets.length; i++){
    if (buckets[i] + nums[index] > target) continue

    buckets[i] += nums[index]

    if (dfs(nums, index + 1, buckets, target)){
      return true
    }

    buckets[i] -= nums[index]
  }

  return false
}