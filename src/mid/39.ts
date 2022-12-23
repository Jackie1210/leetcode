/**
 * 数组之合
 * https://leetcode.cn/problems/combination-sum/
 */

function combinationSum(candidates: number[], target: number): number[][] {
  candidates = candidates.sort()
  const len = candidates.length

  const res: number[][] = []
  const path: number[] = []

  const dfs = (begin: number, target: number) => {
    if (target < 0) {
      return
    }

    if (target === 0) {
      res.push(path.slice())
      return
    }

    for(let i = begin; i < len; i++) {
      if (target - candidates[i] < 0) break
      path.push(candidates[i])
      console.dir(`递归之前 => ${path}, ${i} 剩余 = ${target - candidates[i]}`)
      dfs(i, target - candidates[i])
      console.dir(`递归之后 => ${path}`)
      path.pop()
    }
  }

  dfs(0, target)

  return res
}
