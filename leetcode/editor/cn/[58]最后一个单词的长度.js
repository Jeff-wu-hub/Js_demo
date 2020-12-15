//给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
//
// 如果不存在最后一个单词，请返回 0 。
//
// 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。
//
//
//
// 示例:
//
// 输入: "Hello World"
//输出: 5
//
// Related Topics 字符串
// 👍 262 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var addBinary = function(a, b) {

    let ans = ""; // 返回的字符串
    let ca = 0; // 进位职位1或0
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) { // 两个都结束推出
        let tempA = !a[i]? 0:parseInt(a[i])
        let tempB = !b[j]? 0:parseInt(b[j])
        let tempC = tempA + tempB + ca
        ca = tempC>=2? 1:0
        ans+=tempC%2
    }
    ans += ca === 1 ? ca : ""; // 判断最后一位是否进位？
    return ans.split('').reverse().join('');  // 由于字符串向后加，所以需要取反，先转换为数组=>取反=>转换字符串
};
console.log(addBinary('11','1'))
//leetcode submit region end(Prohibit modification and deletion)
