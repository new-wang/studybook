/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
    // 两次循环，第一次获得长度，第二次移除指定节点
    let dummy = new ListNode(0);
    dummy.next = head;

    let l = 0, temp = dummy;
    while (temp.next) {
        l++;
        temp = temp.next;
    }
    temp = dummy;
    // 倒数第n个节点，正数第l-n+1个节点
    let removeNode = l - n + 1;
    for (let i = 1; i < removeNode; i++) {
        temp = temp.next;
    }
    // 第l-n+1个节点即为要删除的节点
    temp.next = temp.next.next
    return dummy.next;
};
// 数组
var removeNthFromEnd2 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let newArr = [],temp = dummy
    while(temp){
        newArr.push(temp)
        temp = temp.next
    }
    //newArr[newArr.length - n - 1].next =  newArr[newArr.length - n + 1]
    // 这样可能会有数组取值 undefined 情况
    newArr[newArr.length - n - 1].next =  newArr[newArr.length - n - 1].next.next
    
    return dummy.next;
};
// 栈 放入数组 暴露出倒数第n个
var removeNthFromEnd3 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let newArr = [],temp = dummy
    while(temp){
        newArr.push(temp)
        temp = temp.next
    }
    for(let i = 0; i < n; i++){
        newArr.pop()
    }
    newArr[newArr.length - 1].next = newArr[newArr.length - 1].next.next
    return dummy.next;
};

// 双指针
var removeNthFromEnd4 = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let fast = dummy,slow = dummy,i = 0;
    while(i < n){
        fast = fast.next
        i++;
    }
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    // 遍历后得到的为倒数第n个节点的前节点
    slow.next = slow.next.next;
    return dummy.next;
};