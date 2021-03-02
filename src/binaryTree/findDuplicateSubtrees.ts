import TreeNode from './ds'
// 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。两棵树重复是指它们具有相同的结构以及相同的结点值。
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