// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
function moveZeroes(nums: number[]): void {
  const len = removeElement(nums, 0)

  for(let i = len; i < nums.length; i++){
    nums[i] = 0
  }
};

function removeElement(nums: number[], val: number): number {
  let slow = 0
  let fast = 0
  while(fast < nums.length){
    if (nums[fast] !== val){
      nums[slow++] = nums[fast]
    }
    fast++
  }

  return slow
}
