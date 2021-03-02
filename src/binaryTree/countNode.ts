import TreeNode from './ds'
// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。 满二叉树节点个数2^h - 1
function countNodes(root: TreeNode | null): number {
  let hl = 0
  let hr = 0

  hl = getHeight(root.left)
  hr = getHeight(root.right)

  if (hl === hr){
    return Math.pow(2, hl) + countNodes(root.right)
  } else {
    return Math.pow(2, hr) + countNodes(root.left)
  }
}

function getHeight(root: TreeNode | null): number{
  if (root === null) return 0

  let h = 0
  while(root){
    root = root.left
    h++
  }

  return h
}