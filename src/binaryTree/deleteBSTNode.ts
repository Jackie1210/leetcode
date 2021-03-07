import TreeNode from './ds'

// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。
// 说明： 要求算法时间复杂度为 O(h)，h 为树的高度。
// 删除时 将儿茶搜索树的右子树的最小节点的值付给root，再删除右子树的最小节点
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null

  if (root.val === key){
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    if (root.left !== null && root.right !== null){
      const minNode = getMinNode(root.right)

      root.val = minNode.val

      root.right = deleteNode(root.right, minNode.val)

    }
  } else if (key < root.val){
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }

  return root
}

/**
 * 寻找最小的节点
 * @param root 
 * @returns 
 */
function getMinNode(root: TreeNode | null): TreeNode | null{
  while(root.left !== null) root = root.left

  return root
}