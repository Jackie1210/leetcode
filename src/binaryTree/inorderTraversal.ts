/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import TreeNode from './ds'
function inorderTraversal(root: TreeNode | null): number[] {
  const res = []
  function dfs(root: TreeNode | null, res: number[]) {
    if (!root) return

    dfs(root.left, res)
    res.push(root.val)
    dfs(root.right, res)
  }
  
  dfs(root, res)
  return res
};