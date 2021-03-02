// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let slow = 0
  let fast = 0

  while(fast < nums.length){
    if (nums[slow] !== nums[fast]){
      slow++

      nums[slow] = nums[fast]
    }

    fast++
  }

  return slow + 1
}