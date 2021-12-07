/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 方法一：遍历存储
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    var mapper = new Map();
    while(head){
        if(mapper.has(head)){
            return head
        }
        mapper.set(head, head);
        head = head.next
    }
    return null
};

// 方法二：快慢指针
 var detectCycle = function(head) {
    if (!head || !head.next) return null;
        
    var fast = head,slow = head
    while(fast){
        if(!fast.next){
            return null
        }
        // 慢指针走一步，快指针走两步 
        slow = slow.next
        fast = fast.next.next
        // 快慢指针相遇，有环
        if(fast == slow){
            // 任一一节点指向头节点
            fast = head
            while (fast != slow) {
                fast = fast.next;
                slow = slow.next;
            }
            // 返回相遇时节点 -- 环起点
            return fast;
        }
    }
    return null
};