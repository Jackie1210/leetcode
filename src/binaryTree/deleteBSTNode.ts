import TreeNode from './ds'

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

function getMinNode(root: TreeNode | null): TreeNode | null{
  while(root.left !== null) root = root.left

  return root
}