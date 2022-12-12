/**
 * 根据二叉树创建字符串
 * 
 * [1,2,3,4] => '1(2(4))(3)'
 * [1,2,3,null,4] => '1(2()(4))(3)'
 */

import TreeNode from "../binaryTree/ds"

function tree2str(root: TreeNode | null): string {
  if (!root) return ''
  if (!root.left && !root.right) return `${root.val}`
  if (!root.right) return `${root.val}(${tree2str(root.left)})`

  let str = `${root.val}` + `(${tree2str(root.left)})` + `(${tree2str(root.right)})`

  return str
}