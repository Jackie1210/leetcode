import TreeNode from './ds'
/**
 * 将二叉树拉成一个链表，思路:后序遍历 在回溯的过程中每次现将左子树接到右子树，再讲原右子树接到现右子树的尾节点
 * @param root 
 * @returns 
 */
function flatten(root: TreeNode | null): void {
  if (!root) return
  flatten(root.left)
  flatten(root.right)

  const left = root.left
  const right = root.right

  root.left = null
  root.right = left

  let p = root
  while(p.right !== null){
    p = p.right
  }

  p.right = right

}