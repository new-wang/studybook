/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
    给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
    k 是一个正整数，它的值小于或等于链表的长度。
    如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
    进阶：
    你可以设计一个只使用常数额外空间的算法来解决此问题吗？
    你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 反转[a,b) 区间链表，左闭右开
var reverseList = function (a, b) {
    let prev = null, cur = a;
    while (cur != b) {
        [cur.next, prev, cur] = [prev, cur, cur.next];
    }
    return prev; //返回反转后的头节点
};

// 递归 每次反转前 k 个元素，不足 k 个不反转
var reverseKGroup = function (head, k) {
    let a = head, b = head;
    //   查看链表长度是否 >= k,不足k 不需要反转
    for (let i = 0; i < k; i++) {
        if (!b) {
            return head
        }
        b = b.next
    }
    //   k个元素一反转
    // 第一次反转后返回的节点即为头节点
    let nHead = reverseList(a, b)
    a.next = reverseKGroup(b, k)
    return nHead
};

// 迭代 将链表k个一分组(指定指针每次移动k)，每个分组判断长度,决定是否反转
// 分组子链表头节点 head，还需要有 head 的上一个节点 pre，以便翻转完后把子链表再接回 pre
// 反复移动指针 head 与 pre，对 head 所指向的子链表进行翻转，直到结尾
var reverseKGroup = function (head, k) {

    var reverseList = function (head, tail) {
        let prev = tail.next;
        let p = head;
        while (prev !== tail) {
            // const nex = p.next;
            // p.next = prev;
            // prev = p;
            // p = nex;
            [p.next,prev,p] = [prev,p,p.next]
        }
        return [tail, head];
    };

    const _Node = new ListNode(0);
    _Node.next = head;
    let pre = _Node;

    while (head) {
        let tail = pre;

        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return _Node.next
            }
        }

        const nex = tail.next;
        [head, tail] = reverseList(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }

    return _Node.next
};