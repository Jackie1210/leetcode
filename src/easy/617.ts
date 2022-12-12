/**
 * 合并二叉树
 */

import TreeNode from "../binaryTree/ds"

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) return null
  if (root1 && !root2) return root1
  // 这里不能简单的使用 new TreeNode(root1.val) 因为root1可能有子节点
  if (!root1 && root2) return root2

  const tree = new TreeNode(root1.val + root2.val) 
  tree.left = mergeTrees(root1.left, root2.left)
  tree.right = mergeTrees(root1.right, root2.right)

  return tree
}

