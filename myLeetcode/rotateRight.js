/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 61. 旋转链表
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
* 获取到链表的总长度 n;
* 将链表头尾相连，闭合为环；
* 新链表的最后一个节点为原链表的第 (n−1)−(k mod n) 个节点（从 0 开始计数）；
* 指定位置断开环，得到我们需要的链表；
* 取模计算实际移动的步数，实际移动步数 = n - (k % n);
* 当链表长度不大于 1（空链表/只有一个节点的链表），或者 k 为 n（链表长度）的倍数时，新链表将与原链表相同，无需进行处理 
*/
var rotateRight = function (head, k) {
    //无需处理情况
    if (!head || !head.next || !k) {
        return head;
    }
    // 获取链表长度
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }

    // 实际移动步数 （k为n倍数时，无需处理）
    let add = n - k % n;
    if (add === n) {
        return head;
    }
    
    // 将链表尾节点与头节点相连，闭合为环
    cur.next = head;

    // 得到新链表的最后一个节点
    while (add) {
        cur = cur.next;
        add--;
    }
    // 保存新链表的头节点，然后在尾节点处截断
    const ret = cur.next;
    cur.next = null;
    // 返回新链表的头节点
    return ret;
};