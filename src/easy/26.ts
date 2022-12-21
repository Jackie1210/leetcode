/**
 * 删除一个升序列表中的重复项
 * @param nums 
 * @returns 
 */
function removeDuplicates(nums: number[]): number {
  let i = 0
  let j = 0
  let len = nums.length
  while (i >= 0 && i < len) {
    if (j >= len) return i + 1

    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j]
    }
    j++
  }
}
