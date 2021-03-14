/**
 * 三数之和
 * @param nums 
 */
function threeSum(nums: number[]): number[][] {
  const n = nums.length
  const res = []
  if(n < 3){
    return []
  }

  nums.sort((a, b) => a - b)

  for(let i = 0; i < n; i++){
    if (nums[i] > 0){
      return res
    }

    if (i > 0 && nums[i] === nums[i - 1]){
      continue
    }

    let lo = i + 1
    let hi = n - 1

    while(lo < hi){
      if (nums[i] + nums[lo] + nums[hi] === 0){
        res.push([nums[i], nums[lo], nums[hi]])
        while(nums[lo] === nums[lo + 1]) lo++
        while(nums[hi] === nums[hi - 1]) hi--
        lo++
        hi--
      } else if (nums[i] + nums[lo] + nums[hi] < 0){
        lo++
      } else if (nums[i] + nums[lo] + nums[hi] > 0){
        hi--
      }
    }
  }

  return res
};