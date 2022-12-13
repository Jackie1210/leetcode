/**
 * 合并两个升序链表
 */

import ListNode from "../ListNode/ds"

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const node = new ListNode(Number.MIN_SAFE_INTEGER)

  let prev = node

  while(list1 && list2) {
      if (list1.val <= list2.val) {
          prev.next = list1
          list1 = list1.next
      } else {
          prev.next = list2
          list2 = list2.next
      }
      prev = prev.next
  }

  prev.next = list1 ? list1 : list2

  return node.next
}