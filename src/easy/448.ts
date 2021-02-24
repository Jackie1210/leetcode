function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums)
  const res = []
  const len = nums.length

  for (let i = 1; i < len + 1; i++){
    if (!set.has(i)){
      res.push(i)
    }
  }

  return res

};