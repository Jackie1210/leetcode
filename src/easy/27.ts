/**
 * 移除数组中的指定元素。空间复杂度O(1)
 * 双指针
 * @param nums 
 * @param val 
 * @returns 
 */
function removeElement(nums: number[], val: number): number {
  let i = 0
  let j = 0
  const len = nums.length

  while(j >=0 && j < len) {
    if (nums[j] !== val) {
      nums[i++] = nums[j]
      return
    }
    j++
  }

  return i + 1
}
