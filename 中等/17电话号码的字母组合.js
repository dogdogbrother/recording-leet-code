/**
 * @param {string} digits
 * @return {number}
 */
/*
17.电话号码的字母组合
    
题目：给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

个人说明:
和手机打字是一个意思
 */

 /*
 这里粗略一看似乎没什么难度，无非就是把2-9的字典写好，然后递归执行遍历。但是其实不简单，而且也也不到递归，当然，用递归肯定是可以的。
 题目总结一下就是，如果数组是2个。就要是数组长度*数组长度，如果是三个，就是刚才平方过后的长度再度*第三个数组的长度。
 我的解题过程是这样的。
 1. 定义对象字典，2-9对应的按钮我都写好了先。
 2. 我把字符串分割成了数组，然后过滤掉了0和1后，用map得到了新数组mapArr，里面装的就是字母数组了。[[a,b,c],[d,e,f],[q,w,e,r]]
 3. 这时候我定义2个数组，一个res是装真正结果的，一个是tempRes遍历时临时装结果的用的。
 4. 我们先写一个fou循环，循环 [[a,b,c],[d,e,f],[q,w,e,r]] 这个数组，如果res没有值的话，我先给res赋值数组的第一位，因为第一位是不需要平方组合的，从
 第二个循环开始，我们要遍历res，也就是[a,b,c],在遍历的过程中，还要再次遍历上次循环中的值，也就是[d,e,f]。
 5. 第二层的第一次遍历和第三层的第一次遍历会得到'ad'这个字符串，push进tempRes临时数组里面，当第二层和第三层遍历全部结束的时候tempRes就会有3*3长度，也就是['ad','ae','af','bd',.....]。
 6. 当我们第一层的第二次循环完完全全的结束后，我们把tempRes的9位长度的数组赋值给res。
 7. 至此我们第一层的循环走了2层，也得到了参数数组的第一位和第二位组合后的内容，后面的操作就是不停的遍历得到的组合数组，不能的把得到新的值赋值给res。
 8. 当我们程序完全结束的时候，res会比较庞大，因为过程中组合产生的所有的可能都在里面，并没有抛弃的动作。而我们的参数是234，'ad'这种值只是符合了23的组合，并没有4，所以是不需要的。
 9. 我们再次过滤一下，把值不符合长度的给踢出去。那么这个算法函数就完成了。
 */

let digits = '234';
let obj = {
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z'],
}
var letterCombinations = function(digits) {
    let strArr = digits.split('');
    strArr = strArr.filter(item=>{
        return item!=='0'&&item!=='1'
    });
    let mapArr = strArr.map(item=>{
        return obj[item]
    });
    let res = [];
    let tempRes  = [];
    for (let i = 0; i < mapArr.length; i++) {
        if (res.length === 0) {
            res = mapArr[i];
        }else{
            res.forEach(item1 => {
                mapArr[i].forEach(item2 => {
                    let str = item1 + item2;
                    tempRes.push(str)
                })
            })
            res = tempRes;
        }  
    }
    let length = strArr.length
    res = res.filter(item=>{
        return item.length === length;
    })
    return res;
};
letterCombinations(digits);

/**
 执行用时 :80 ms, 在所有 JavaScript 提交中击败了58.60%的用户
 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了25.06%的用户    
 虽然题解出来了，但是我不太满意，所以我可以优化一下
 1. 58行的操作是完全没有必要的，如果strArr的长度为0我直接return []就好了，在第一层循环里面i直接就是1，这样较少一次循环和循环内部的判断。
 
    执行用时 :72 ms, 在所有 JavaScript 提交中击败了58.60%的用户
    内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了34.83%的用户 
*/