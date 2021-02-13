import TreeNode from './ds'
function isValidBST(root: TreeNode | null): boolean {
  help(root, null, null)
}

function help(root: TreeNode | null, min: TreeNode | null, max: TreeNode | null){
  if (!root){
    return true
  }

  if (min !== null && min.val >= root.val) return false
  if (max !== null && max.val <= root.val) return false

  return help(root.left, min, root) && help(root.right, root, max)
}