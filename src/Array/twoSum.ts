function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  nums.forEach((item, index) => {
    map.set(item, index)
  })

  let res = [-1, -1]
  nums.forEach((n, i) => {
    const p = target - n
    if (map.has(p) && map.get(p) !== i){
      res = [i, map.get(p)]
    }
  })

  return res
}