import TreeNode from './ds'
// 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。 满二叉树节点个数2^h - 1
// 分别计算左右子树的高度 相等则左子树是满二叉树 不相等则右子树是满二叉树
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

/**
 * 计算一棵树的高度
 * @param root 
 * @returns 
 */
function getHeight(root: TreeNode | null): number{
  if (root === null) return 0

  let h = 0
  while(root){
    root = root.left
    h++
  }

  return h
}