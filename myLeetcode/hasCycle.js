/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//  方法一 ：利用数组遍历存储节点
// （遍历到已存储的节点说明有环）
 var hasCycle = function(head) {
    if (!head || !head.next) return false;

    // var arr = [];
    // while(head){
    //     if(arr.includes(head)){
    //         return true
    //     }
    //     arr.push(head)
    //     head = head.next
    // }
    
    // var hasCycle = function (head) {
    //     const flag = Symbol();
    //     while (head) {
    //       if (head.val === flag) return true;
    //       head.val = flag;
    //       head = head.next;
    //     }
    //     return false;
    //   };

    var mapper = new Map();
    while(head){
        if(mapper.has(head)){
            return true
        }
        mapper.set(head, head);
        head = head.next
    }

    return false
};
//  方法二
// 快慢指针，有环则快的一定可以追上慢的
var hasCycle = function(head) {
    if(!head){
        return false
    }
    var fast = head,slow = head
    while(fast){
        if(!fast.next){
            return false
        }
        slow = slow.next
        fast = fast.next.next
        if(fast == slow){
            return true
        }
    }
    return false
};
