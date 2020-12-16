//给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
//
// 例如：
//给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回其自底向上的层次遍历为：
//
// [
//  [15,7],
//  [9,20],
//  [3]
//]
//
// Related Topics 树 广度优先搜索
// 👍 375 👎 0
//    3
//   / \
//  9  20
//    /  \
//   15   7

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root == null) return []
    const queue = [] // 公共数组，存放节点
    queue.push(root)
    const arr = [] // 最后返回的数组
    while(queue.length){
        const temp = [] // 临时数组，最后保存于arr里面
        const length = queue.length // 不能使用遍历，只能使用长度来限制当前需要遍历几次
        for(let i =0;i<length;i++){
            // for循环代表循环次数
            let tem = queue.shift();
            if(tem.left) queue.push(tem.left);
            if(tem.right) queue.push(tem.right)
            temp.push(tem.val)
        }
        arr.unshift(temp);
    }
    return arr

}
