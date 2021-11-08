import TreeNode from "./ds"
function preorderTraversal(root: TreeNode | null): number[] {
  const res = []
  if (root === null) return res

  function dfs(root: TreeNode | null, res: number[]) {
      if (root === null) return
    
      res.push(root.val)
      dfs(root.left, res)
      dfs(root.right, res)
  }

  dfs(root, res)

  return res
};