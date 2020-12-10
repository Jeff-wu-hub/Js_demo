//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
//
//
// 示例：
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
//
// Related Topics 链表
// 👍 1429 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let node = new ListNode()
    let head = node
    let li = new ListNode()
    while(l1 !== null&&l2!==null){
        let li = new ListNode()
        if(l1.val<=l2.val){
            li.val = l1.val
            node.next = li
            l1 = l1.next
            node = node.next
        }else{
            li.val = l2.val
            node.next = li
            l2 = l2.next
            node = node.next
        }
    }
    node.next = l1 === null ? l2 : l1;
    return head.next
};
//leetcode submit region end(Prohibit modification and deletion)
