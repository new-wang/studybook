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
    
    // const flag = Symbol();
    // while (head) {
    //     if (head.val === flag) return true;
    //     head.val = flag;
    //     head = head.next;
    // }
    // return false;

    // let set = new Set();
    // while(head) {
    //     if(set.has(head)) {
    //         return true;
    //     }
    //     set.add(head);
    //     head = head.next;
    // }
    // return false;

    // 修改原节点
    // while (head) {
    //     if (head.tag) { 
    //         //访问当前节点时首先判断其是否在之前被访问过
    //         return head; 
    //         // 如果被访问过，那么第一个被重复访问的节点即是入环起始节点了，直接返回结果即可
    //     }
    //     head.tag = true
    //     //通过JS对象属性方式添加一个tag属性，其值为true表明当前节点已经被遍历过了
    //     head = head.next
    //     //继续遍历下一个节点
    // }
    // return false

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
