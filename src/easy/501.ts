/**
 * 寻找二叉搜索树中的众数(出现概率最高的数)
 */

import TreeNode from "../binaryTree/ds";

function findMode(root: TreeNode | null): number[] {
  const map = new Map<number, number>()

  function dfs(root: TreeNode | null) {
    if (!root) return 
    dfs(root.left)
    map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1)
    dfs(root.right)
  }

  dfs(root)

  const arr = Array.from(map).sort((a, b) => b[1] - a[1])
  const max = arr[0][1]
  return arr.filter(v => v[1] === max).map(v => v[0])
}