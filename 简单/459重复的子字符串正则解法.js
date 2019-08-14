/**
 * @param {string} s
 * @return {boolean}
 */

/**
 
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

    示例 1:
        输入: "abab"
        输出: True
        解释: 可由子字符串 "ab" 重复两次构成。

    示例 2:
        输入: "aba"
        输出: False

    示例 3:
        输入: "abcabcabcabc"
        输出: True
        解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

*/

/**
 
 理解题的思路就不说了，慕课网的讲师的解法称不上是算法，是知识点。
 用正则去匹配。 

*/

var repeatedSubstringPattern = function(s) {
    return /^(\w+)\1+$/.test(s);
};
console.log(repeatedSubstringPattern('abcabc'));
