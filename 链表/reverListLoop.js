// 反转链表的迭代实现

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
function reverseListLoop(a, b){
  let pre = null
  let cur = a
  let nxt = a
  while(cur !== b){
    nxt = cur.next

    cur.next = pre
    pre = cur
    cur = nxt
  }

  return pre
}

function reverseKGroup(head, k){
  if (head === null) return head

  let a = head
  let b = head

  for (let i = 0; i < k; i++){
    if (b === null) return head

    b = b.next
  }

  const newHead = reverseListLoop(a, b)

  a.next = reverseKGroup(b, k)

  return newHead
}