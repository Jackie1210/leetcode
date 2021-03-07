// K个一组翻转链表，迭代实现

/**
 /**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import ListNode from './ds'
/**
 * 翻转链表从a到b的部分
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
function reverseListLoop(a: ListNode|null, b: ListNode|null) : ListNode|null{
  let pre = null
  let cur:ListNode = a
  let nxt:ListNode = a
  while(cur !== b){
    nxt = cur.next

    cur.next = pre
    pre = cur
    cur = nxt
  }

  return pre
}

function reverseKGroup(head: ListNode|null, k: number): ListNode|null{
  if (head === null) return head

  let a: ListNode|null = head
  let b: ListNode|null = head

  for (let i = 0; i < k; i++){
    if (b === null) return head

    b = b.next
  }

  const newHead = reverseListLoop(a, b)

  a.next = reverseKGroup(b, k)

  return newHead
}