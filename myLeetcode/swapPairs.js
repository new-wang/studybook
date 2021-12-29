/**
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
var swapPairs = function (head) {
    if (!head || !head.next) {
        return head
    }
    // 新链表头节点 newHead 为原链表的第二个节点
    const newHead = head.next
    head.next = swapPairs(newHead.next)
    // 新链表的第二个节点为原链表的头节点，newHead.next = head
    newHead.next = head
    return newHead
};
// 迭代
var swapPairs = function (head) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head
    let temp = dummyHead

    while(temp.next && temp.next.next){
        const node1 = temp.next
        const node2 = temp.next.next

        // 两两交换
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        
        // 指针后移
        temp = node1
    }
    return dummyHead
};