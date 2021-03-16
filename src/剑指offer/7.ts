/**
 * 重建二叉树
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * @param preorder 
 * @param inorder 
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map()
  inorder.forEach((o, i) => {
    map.set(o, i)
  })
  function dfs(root, left, right){
    if (left > right) return null
    const node = new TreeNode(preorder[root])
    const i = map.get(preorder[root])
    node.left = dfs(root + 1, left, i - 1)
    node.right = dfs(i - left + root + 1, i + 1, right)

    return node
  }

  return dfs(0, 0, inorder.length - 1)
}