import TreeNode from "../ds"
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  const queue = [root.left, root.right]

  while(queue.length) {
    const left = queue.shift()
    const right = queue.shift()

    if (!left && !right) continue

    if (!left || !right || left.val !== right.val) return false

    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }

  return true
};