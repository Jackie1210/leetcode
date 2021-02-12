/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var dump = new ListNode(-1) // 保留一个节点指向初始的头节点
  dump.next = head
  var pre = dump

  for(let i=1;i<m;i++) pre = pre.next // 定位到需要反转节点的前驱节点，并始终保持不变
  head = pre.next // 重新配置head节点的内存

  for(let j=m;j<n;j++){
      let nxt = head.next
      head.next = nxt.next
      nxt.next = pre.next
      pre.next = nxt
  }

  return dump.next
};