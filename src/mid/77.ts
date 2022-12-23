/**
 * https://leetcode.cn/problems/combinations/
 * @param n 
 * @param k 
 * @returns 
 */
function combine(n: number, k: number): number[][] {
  const res: number[][] = []
  const path = []

  const dfs = (begin: number) => {
    if (path.length === k) {
      res.push(path.slice())
      return
    }
    for(let i = begin; i <= n; i++) {
      path.push(i)
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(1)

  return res
}

const r = combine(4, 2)

console.dir(r)