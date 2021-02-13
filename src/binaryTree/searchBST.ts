import TreeNode from './ds'
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