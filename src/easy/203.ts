import ListNode from "../ListNode/ds";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummyHead = new ListNode(Number.NEGATIVE_INFINITY)
  dummyHead.next = head

  let p = dummyHead
  while(p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return dummyHead.next
}