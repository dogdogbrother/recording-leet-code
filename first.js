/**
 * @param {string} s
 * @return {number}
    思路是这样的,假如我把字符串变成数组,然后遍历这个数组.
    然后我写一个策略函数,此函数会判断传进来的值是否大于1,是否等于偶数,是否左侧includs
    
 */
var s = "10101";
var countBinarySubstrings = function(s) {
    let last,
        cur,
        res;
    last = res = 0;
    cur = 1; 
        
    for(var i = 1; i<s.length ; i++){
        if(s[i] == s[i-1]){
            cur ++;
        }else{
            last = cur;
            cur = 1;
        }
        if(last>=cur) res++;
    }
    return res;
};
countBinarySubstrings(s);