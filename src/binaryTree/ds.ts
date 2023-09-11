export default class TreeNode<T = number>{
  val: T
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: T, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}