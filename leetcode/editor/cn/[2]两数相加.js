//给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
// 示例：
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//输出：7 -> 0 -> 8
//原因：342 + 465 = 807
//
// Related Topics 链表 数学
// 👍 5354 👎 0


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
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
let addTwoNumbers = function(l1, l2) {
    let sum = new ListNode('0') // 创建一个全新链表
    let Head = sum // 设置头部
    let addSign = 0 // 设置进位
    while(l1||l2||addSign){// 如果链表不为空继续运行
        let tempL1 = l1 !== null? l1.val : 0
        let tempL2 = l2 !== null? l2.val : 0
        let temp = tempL1 + tempL2 + addSign //计算和
        addSign = temp>=10? 1: 0 // 计算进位
        sum.next = new ListNode(temp%10) // 建立节点并赋值
        sum = sum.next // 切换节点
        if(l1) l1 = l1.next // 切换节点
        if(l2) l2 = l2.next // 切换节点
    }
    return Head.next
};
//leetcode submit region end(Prohibit modification and deletion)
