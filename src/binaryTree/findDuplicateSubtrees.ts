import TreeNode from './ds'
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const map = new Map<string, number>() // 存放所有序列化的子树
  const res: Array<TreeNode | null> = []

  help(root, map, res)

  return res
}

function help(root: TreeNode | null, map: Map<string, number>, res: Array<TreeNode | null>){
  if (!root){
    return '#'
  }

  const left = help(root.left, map, res)
  const right = help(root.right, map, res)

  const substr = `${left}_${right}_${root.val}`
  const times = map.get(substr) || 0

  map.set(substr, times + 1)

  if (map.get(substr) === 2){
    res.push(root)
  }

  return substr
}