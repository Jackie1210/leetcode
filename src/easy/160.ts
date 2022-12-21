/**
 * 链表相交
 */
import ListNode from "../ListNode/ds";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null

  let p = headA
  let q = headB

  while(p !== q) {
    p = p ? p.next : headB
    q = q ? q.next : headA
  }

  return p
}