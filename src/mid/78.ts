export function subsets(nums: number[]): number[][] {
  nums = nums.sort()
  const res: number[][] = []
  const path: number[] = []
  const len = nums.length

  const dfs = (begin: number) => {
    res.push(path.slice())

    for(let i = begin; i < len; i++) {
      path.push(nums[i])
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(0)

  return res
}

const res = subsets([1,2,3])
console.dir(res)