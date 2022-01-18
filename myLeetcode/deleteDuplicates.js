/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *  */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 83. 删除排序链表中的重复元素
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，
 * 请你删除所有重复的元素，使每个元素 只出现一次 。
 * 返回同样按升序排列的结果链表。
 */
var deleteDuplicates = function (head) {
    // 给定的链表是按升序排列的链表 - 重复元素在链表中出现的位置是连续的
    // 如果当前节点cur与vur.next重复 那么cur.next = cur.next.next
    var cur = head;
    while (cur && cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};


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
 * 
 * 82. 删除排序链表中的重复元素 II
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链
 * 表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字
 * 返回同样按升序排列的结果链表。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 当头节点可能会被修改时，我们会需要一个哑结点保存链表
var deleteDuplicates = function (head) {
    if (!head) return null;
    // 设置一个dummy哑结点
    const dummy = new ListNode(0, head);
    let cur = dummy;
    // 当下一个节点存在，且删除节点后要链接的节点存在
    while (cur.next && cur.next.next) {
        // 如果节点值相等
        if (cur.next.val == cur.next.next.val) {
            // 记录这个值
            const x = cur.next.val;
            // 删除后还有下一个节点才能判断值是否还相等，所以要先判断cur.next==null;
            while (cur.next && cur.next.val == x) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
}