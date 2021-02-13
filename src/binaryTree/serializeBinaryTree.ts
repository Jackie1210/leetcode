import TreeNode from './ds'
// 前序遍历的方式
/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const arr = []
  _serialize(root, arr)

  const str = arr.join(',')

  return str

};

function _serialize(root: TreeNode | null, arr: Array<string|number>): void{
  if (root === null){
    arr.push('#')

    return
  }

  arr.push(root.val)
  _serialize(root.left, arr)
  _serialize(root.right, arr)
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data){
    return null
  }
  const arr = data.split(',')
  const res = _deserialize(arr)

  return res
  
};

function _deserialize(node: Array<string>){
  const firstNode = node.shift()

  if (firstNode === '#') return null

  let root = new TreeNode(Number(firstNode))

  root.left = _deserialize(node)
  root.right = _deserialize(node)

  return root
}