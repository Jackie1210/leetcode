import TreeNode from './ds'
/**
 * 查询二叉搜索树
 * @param root 
 * @param val 
 * @returns 
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root === null) return root

  if (root.val === val){
      return root
  } else if (root.val < val){
      return searchBST(root.right, val)
  } else {
      return searchBST(root.left, val)
  }
}