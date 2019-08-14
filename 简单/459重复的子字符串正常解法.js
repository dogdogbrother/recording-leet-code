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
 
 这题我思索了一下，用字符串分割数组,如果数组里面都是''就代表是重复子字符串组成。
 但是split的参数应该是什么呢，比较粗暴的方法是至少从2位到参数的一半的位置，循环遍历测试。
 虽然还没有测试，但是预想就知道性能有点渣。。 
    ps 通过了，但是1340ms 击败5%的成绩让我日了狗，我要优化一下。
*/

            // var repeatedSubstringPattern = function(s) {
            //     let ctl = parseInt(s.length/2); //  conditionLnegth 条件长度
            //     let res = false;
            //     let p = '';   //作为起始参数
            //     for (let i = 0; i < ctl; i++) {
            //         p += s[i];                  //每次循环都添加一个字符串进去当条件
            //         let strArr = s.split(p);    // 如果得到的是['','','','']就代表true
            //         strArr = strArr.join('');
            //         if (!strArr.length) return res = true;
            //     }
            //     return res;
            // };
            // console.log(repeatedSubstringPattern('abcabc'));

/**
 
 我该如何优化呢，在我苦思冥想没有思路的时候，看到评论有个B是真的秀，一行代码就解决了，我用js提交竟然打败了100%的对手。
 震惊！！！！！！！！！！！！！！！！

*/
var repeatedSubstringPattern = function(s) {
    return (s+s).substring(1,s.length*2-1).includes(s);
    // 一步一步剖析下 s+s === abcabcabcabc
    // substring(1,s.length*2-1) 就是截取第2位到倒数第2位，也就是 bcabcabcab
    // bcabcabcab 是否包含了 abcabc , 是，返回true

    // 如果参数是 abcabca ,那么就成了 abcabcaabcabca ，截取后是 bcabcaabcabc ,不包含了abcabca，那么返回 false，也是正确的。

    // 再用数字举个例子， 1212 => 12121212 => 212121 是否包含了1212  true
    // 再用数字举个例子， 1213 => 12131213 => 213121 是否包含了1213  false
    // 减2可以吗？ 再用数字举个例子， 123123 => 123123 123123 => 3123 1231 是否包含了 123 123 可以
    // 减3也可以，但是减4的话就会发现，后面的子串跑到了前面，但是样子是一样一样的。

    // 好神奇，怎么想也想不出个原理。

    // 评论里面有个解释是这样的  假设母串S是由子串s重复N次而成，则 S+S则有子串s重复2N次， 现在S=ns， S+S=2ns 因此S在S+S[1:-1]中必出现一次以上
    // 必出现一次我能理解，理解不了的是为啥不是子串构成就出现0次呢。

    // 明白了。假设左右都没减值。为什么能找到S呢？因为是2个S啊，不过也可以理解为由N个子串组成的，因为S是重复的子串嘛，可以一部分的S是从左边来的，一部分的S是从右边来的。
    // 但是如果你不是子串的话，你也能找到2个，就是左右2个，严丝合缝。 如果删除左右各一位的话，破坏了完整性，找不到了！！！


    // 秀啊真几把秀！！！
};
console.log(repeatedSubstringPattern('abcabca'));
