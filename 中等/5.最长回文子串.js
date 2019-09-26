/**

  给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

  示例 1：
    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。

  示例 2：
    输入: "cbbd"
    输出: "bb"

 */

/**
 * 思路解析:
 *  这个题要是我写的话肯定是暴力解法了,可以说是非常蠢了,所以我直接看了答案,我打算用2种解法
 *  一种是中心扩展算法,一种是马拉车算法
 */



 /**
 * @param {string} s
 * @return {string}
 */

/**
 *  中心扩展算法的做法是,先遍历整个数组(从1位到倒数第2位,因为第一位和最后一位构不成中心点)
 *  因为是回文,所以中心点的左侧也就是-1和右侧+1是一样的,直到不一样了或是超出数组边界了,代表回文结束
 *  这其中有个不小的问题是,中心点有可能是2个数,例如abccba也是个回文.
 */

var longestPalindrome = function(s) {
  let start = 0
  let end = 0

  const expandAroundCenter = (str,left,right)=>{
    // 这个 while 循环有三个条件,全部成立的情况下才是回文,缺一不可.如果是回文的话左侧-1,右侧加1
    while (left >= 0 && right < str.length() && str.charAt(left) == str.charAt(right)) {
      left--;
      right++;
    }
    //这里为啥 要减1呢,假如 0为到7位是回文,那么是8位数,7-0 = 7 应该加1才对啊.
    //这是因为我对while循环不熟悉的原因,while符合条件了就执行,当发现不符合的时候,left和right已经超界了.
    //也就是-1和+1了,所以本来是加1的操作变成了-1的操作了
    return right - left - 1
  }
  for (let i = 1; i < s.length-1; i++) {
    //这里我定义一个函数,用于返回中心点扩展的回文长度
    let len1 = expandAroundCenter(s,i,i)
    // 这里其实有2个问题,1是为啥要有2个一模一样的函数,2是为啥第一个函数里面i要给2次而下面的给i+1
    // 其实这个地方是为了兼容 abbc 这样的情况出现,说实话我觉得这个地可以优化一下,
    let len2 = expandAroundCenter(s,i,i+1)
    // 如果是 偶数中心那么 len1肯定是非常小的 反之亦然
    let len = Math.max(len1, len2);
    //这个地方就是更新最长数据,如果找到的回文不是最长的也没啥意义,如果是最长的就更新 tsart和end的位置
    if (len > end -start ) {
      // -1 的原因我用上面的例子去说, abcddcba 0-7是回文,那么len的长度是8,i的值是4
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }    
};

