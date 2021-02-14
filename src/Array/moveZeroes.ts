/**
 Do not return anything, modify nums in-place instead.
 */
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
