// 填充每个节点的下一个右侧节点指针
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class NodeType {
  val: number
  left: NodeType | null
  right: NodeType | null
  next: NodeType | null
  constructor(val?: number, left?: NodeType, right?: NodeType, next?: NodeType) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
      this.next = (next===undefined ? null : next)
  }
}

function connect(root: NodeType | null): NodeType | null {
  if (root === null || root.left === null){
    return root
  }
  connect2Node(root.left, root.right)

  return root
}

function connect2Node(node1: NodeType|null, node2: NodeType|null): void{
  if (!node1 || !node2){
    return
  }

  node1.next = node2

  connect2Node(node1.left, node1.right)
  connect2Node(node2.left, node2.right)

  connect2Node(node1.right, node2.left)

}