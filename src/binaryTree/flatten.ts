import TreeNode from './ds'

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