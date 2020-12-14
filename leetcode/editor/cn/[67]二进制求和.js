//给你两个二进制字符串，返回它们的和（用二进制表示）。
//
// 输入为 非空 字符串且只包含数字 1 和 0。
//
//
//
// 示例 1:
//
// 输入: a = "11", b = "1"
//输出: "100"
//
// 示例 2:
//
// 输入: a = "1010", b = "1011"
//输出: "10101"
//
//
//
// 提示：
//
//
// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 "0" ，就都不含前导零。
//
// Related Topics 数学 字符串
// 👍 530 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
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
