/**
 * 寻找重复的数字
 * @param nums 
 * @returns 
 */
function findRepeatNumber(nums: number[]): number {
  const map = new Map()

  for(const num of nums){
    if (map.get(num) === 1) return num
    
    map.set(num, 1)
  }

  return -1 
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))