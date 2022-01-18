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
    while(cur && cur.next) {
        if(cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};