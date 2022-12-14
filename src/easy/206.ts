import ListNode from "../ListNode/ds";

function reverseList(head: ListNode | null): ListNode | null {
  let x = null
  let p = head
  let q = head

  while(p && q) {
    q = q.next
    p.next = x
    x = p
    p = q
  }

  return x
}