import TreeNode from './ds'
/**
 * 判断二叉搜索树的合法性 前序遍历
 * @param root 
 */
function isValidBST(root: TreeNode | null): boolean {
  return help(root, null, null)
}

function help(root: TreeNode | null, min: TreeNode | null, max: TreeNode | null){
  if (!root){
    return true
  }

  if (min !== null && min.val >= root.val) return false
  if (max !== null && max.val <= root.val) return false

  return help(root.left, min, root) && help(root.right, root, max)
}