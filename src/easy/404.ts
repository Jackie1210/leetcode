/**
 * 左叶子节点之和
 */

import TreeNode from "../binaryTree/ds";

function sumOfLeftLeaves(root: TreeNode | null): number {
  let res = 0
  const queue = [root]

  while(queue.length > 0) {
    const node = queue.shift()

    if (node.left && !node.left.left && !node.left.right) {
      res += node.left.val
    }

    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }

  return res
}

function isLeaf(root: TreeNode | null): boolean {
  if (!root) return false

  return !root.left && !root.right
}
function sumOfLeftLeavesDFS(root: TreeNode | null): number {
  let res = 0

if (!root) return
if (root.left) {
  res += isLeaf(root.left) ? root.left.val : sumOfLeftLeavesDFS(root.left)
}

if (root.right) {
    res += sumOfLeftLeavesDFS(root.right)
}

return res
};