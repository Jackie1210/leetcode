/**
 * 给定一个二叉树，返回从根节点到叶子节点的所有路径
 */

import TreeNode from "../binaryTree/ds";

function binaryTreePaths(root: TreeNode | null): string[] {
  const res = []

  constructPath(root, res, '')

  return res
}

function constructPath(root: TreeNode | null, paths: string[], path: string) {
  if (!root) return

  path += `${root.val}`
  if (!root.left && !root.right) {
    paths.push(path)
  } else {
    path += '->'
    constructPath(root.left, paths, path)
    constructPath(root.right, paths, path)
  }
}