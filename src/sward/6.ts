/**
 * 从尾到头打印链表节点
 * @param head 
 * @returns 
 */
function reversePrint(head: ListNode | null): number[] {
  const res = []
  
  while(head !== null){
      res.unshift(head.val)
      head = head.next
  }

  return res
}