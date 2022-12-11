/**
 * 路径总和
 * 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum
 */

import TreeNode from "../binaryTree/ds"

 function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum

  return hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
}