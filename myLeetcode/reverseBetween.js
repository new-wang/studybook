/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 思路一：切断连接，区间反转，反向连接
var reverseBetween = function (head, left, right) {
    const _Node = new ListNode(-1);
    _Node.next = head//虚拟头节点

    let pre = _Node
    for (let i = 0; i < left - 1; i++) {
        //pre遍历到left的前一个节点
        pre = pre.next
    }
    let rightNode = pre
    for (let i = 0; i < right - left + 1; i++) {
        //rightNode遍历到right的位置
        rightNode = rightNode.next
    }
    let leftNode = pre.next //保存leftNode
    let curr = rightNode.next //保存rightNode.next
    //切断left到right链，独立出区间
    pre.next = null
    rightNode.next = null

    var reverseList = function (head) {
        let prev = null, curr = head;
        while (curr) {
            [curr.next, prev, curr] = [prev, curr, curr.next];
        }
    };

    reverseList(leftNode);

    //   反向连接
    pre.next = rightNode;
    leftNode.next = curr;

    return _Node.next;
};
// 思路二：遍历到left的前一个节点，由该节点开始反转到right区间内的链表（无需切断再连接
var reverseBetween = function (head, left, right) {
    const _node = new ListNode(-1);
    _node.next = head;

    // 遍历到开始反转的前一个节点（left的前一个节点）
    let pre = _node;
    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next;
    }
    //  left到right区间反转
    let curr = pre.next;
    for (let i = 0; i < right - left; ++i) {
        const next = curr.next;
        curr.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return _node.next;
};

