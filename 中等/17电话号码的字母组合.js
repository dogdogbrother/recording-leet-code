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
 这里粗略一看似乎没什么难度，无非就是把2-9的字典写好，然后递归执行遍历。

 */
let digits = '8821';
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
    })
    
    let mapArr = strArr.map(item=>{
        return obj[item]
    })
    console.log(mapArr);
};
letterCombinations(digits);