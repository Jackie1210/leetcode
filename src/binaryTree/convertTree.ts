import TreeNode from './ds'
function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0

  const dfs = (root) => {
    if (!root){
      return
    }

    dfs(root.right)
    sum += root.val

    root.val = sum

    dfs(root.left)
  }

  dfs(root)
  return root
}