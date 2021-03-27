/**
 * 数组中的第K个最大元素
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * @param nums 
 * @param k 
 */
function findKthLargest(nums: number[], k: number): number {
  let left = 0
  let right = nums.length - 1

  const target = nums.length - k

  while(1){
    const index = partition(nums, left, right)

    if (index === target){
      return nums[index]
    } else if (index < target){
      left = index + 1
    } else {
      right = index - 1
    }
  }
};

function partition(nums: number[], left: number, right: number): number{
  let i = left
  let j = right + 1
  const p = nums[left]

  while(1){
    while(nums[++i] < p) if (i === right) break
    while(nums[--j] > p) if (j === left) break
    if (i >= j) break

    swap(nums, i, j)
  }

  swap(nums, left, j)

  return j
}

function swap(nums: number[], i: number, j: number): void{
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}