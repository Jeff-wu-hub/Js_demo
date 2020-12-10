//编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
// 示例 1:
//
// 输入: ["flower","flow","flight"]
//输出: "fl"
//
//
// 示例 2:
//
// 输入: ["dog","racecar","car"]
//输出: ""
//解释: 输入不存在公共前缀。
//
//
// 说明:
//
// 所有输入只包含小写字母 a-z 。
// Related Topics 字符串
// 👍 1380 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pub = strs[0]//定义一个公共对比
    if(strs==null||strs.length ===0) return '' // 判定空数组
    strs.forEach((item)=>{ // 遍历循环
        let i = 0 // 定义最长临时变量
        for(;i<pub.length&&i<item.length;i++){ // 循环数组
            if(item.charAt(i)!==pub.charAt(i)) break // 如果遇到两个不相等情况跳出循环
        }
        pub = pub.substring(0,i) // 拆分数组0，至i长度
    })
    return pub
};
//leetcode submit region end(Prohibit modification and deletion)
