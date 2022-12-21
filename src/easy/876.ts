/**
 * 寻找链表的中间节点
 */
import ListNode from "../ListNode/ds";

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null

  let slow = head
  let fast = head

  while(fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return fast.next ? slow.next : slow
}