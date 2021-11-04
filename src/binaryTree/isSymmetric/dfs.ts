import TreeNode from "../ds"
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  return helper(root.left, root.right)
};

function helper(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true
  if (!left || !right || left.val !== right.val) return false


  return helper(left.left, right.right) && helper(left.right, right.left)
}