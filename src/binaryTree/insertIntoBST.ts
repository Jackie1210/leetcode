import TreeNode from './ds'
/**
 * 在二叉搜索树种插入一个节点 后续遍历
 * @param root 
 * @param val 
 * @returns 
 */
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return new TreeNode(val)

  if (val < root.val){
    root.left = insertIntoBST(root.left, val)
  } else if (val > root.val){
    root.right = insertIntoBST(root.right, val)
  }

  return root
}