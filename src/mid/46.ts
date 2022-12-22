function permute(nums: number[]): number[][] {
  // 决策树的深度
  const len = nums.length
  // 最终结果
  const res: number[][] = []
  // 当前路径
  const path: number[] = []
  // 备忘录
  const visited = Array(len).fill(false)

  /**
   * 
   * @param depth 递归深度
   * @returns void
   */
  const dfs = (depth: number = 0) => {
    if (depth === len) {
      res.push([...path])
      return
    }

    for (let i = 0; i < len; i++) {
      if (visited[i]) continue

      path.push(nums[i])
      visited[i] = true
      dfs(depth + 1)
      visited[i] = false
      path.pop()
    }
  }

  dfs()

  return res
}
