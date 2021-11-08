import TreeNode from "./ds"
function postorderTraversal(root: TreeNode | null): number[] {
  const res = []
  if (root === null) return res

  function dfs(root: TreeNode | null, res: number[]) {
      if (root === null) return
    
      dfs(root.left, res)
      dfs(root.right, res)
      res.push(root.val)
  }

  dfs(root, res)

  return res
};