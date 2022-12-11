/**
 * 判断是否是平衡二叉树
 */

import TreeNode from "../binaryTree/ds";

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true

  return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0

  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))
}