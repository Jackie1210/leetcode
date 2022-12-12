/**
 * 删除有序链表中的重复项
 */

import ListNode from "../ListNode/ds"

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null

  let p = head

  while(p.next) {
    if (p.next.val === p.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return head
}