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
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    //递归的传入下一个节点 - 到最后一个节点返回
    const newHead = reverseList(head.next);
    /**
     * 以1,2,3,4,5为例
     * 第一轮head为5，head.next为空，返回5
     * 第二轮head为4，head.next为5，执行head.next.next=head也就是5.next=4，
                      把当前节点的子节点的子节点指向当前节点
                      此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
                      此时链表为1->2->3->4<-5
                      返回节点5
     *  第三轮，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
                      此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
                      此时链表为1->2->3<-4<-5
                      返回节点5
     * 第四轮，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
                      此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
                      此时链表为1->2<-3<-4<-5
                      返回节点5
     * 第五轮，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
                      此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
                      此时链表为1<-2<-3<-4<-5
                      返回节点5
     * 出栈，最终头节点5->4->3-2->1
     */
    head.next.next = head;
    // 当链表递归反转之后，新的头节点是last，
    //而之前的head变成了最后一个节点，链表的末尾要指向 null
    head.next = null;
    return newHead;
};

//思考： new ListNode
var  ans = null;
for ( let x = head; x != null; x = x.next) {
    ans = new ListNode(x.val,ans);
}
return ans;

//类似[].reverse()
var reverse = function(pre, head) {
    if(!head) return pre;
    const temp = head.next;
    head.next = pre;
    pre = head
    return reverse(pre, temp);
}
 return reverse(null, head);
 
 // 递归2
var reverse = function(head) {
    if(!head || !head.next) return head;
    // 从后往前翻
    const pre = reverse(head.next);
    head.next = pre.next;
    pre.next = head;
    return head;
}

var reverseList = function(head) {
    let cur = head;
    while(cur && cur.next) {
        cur = cur.next;
    }
    reverse(head);
    return cur;
};

// 指针
var reverseList = function(head) {
    let prev = null,cur = head,next = head;
    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      //ES6解构赋值，curr.next和prev反向
      //[curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
  };
  