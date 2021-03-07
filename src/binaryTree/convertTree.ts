import TreeNode from './ds'
/**
 * 给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
 * 右子树 => 根节点 => 左子树
 * @param root 
 * @returns 
 */
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