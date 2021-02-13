import TreeNode from './ds'
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null) return null
  if (root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left === null && right === null){
    return null
  }

  if (left !== null && right !== null){
    return root
  }

  return left === null ? right : left
}