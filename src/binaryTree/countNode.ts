import TreeNode from './ds'

function countNodes(root: TreeNode | null): number {
  let hl = 0
  let hr = 0

  hl = getHeight(root.left)
  hr = getHeight(root.right)

  if (hl === hr){
    return Math.pow(2, hl) + countNodes(root.right)
  } else {
    return Math.pow(2, hr) + countNodes(root.left)
  }
}

function getHeight(root: TreeNode | null): number{
  if (root === null) return 0

  let h = 0
  while(root){
    root = root.left
    h++
  }

  return h
}