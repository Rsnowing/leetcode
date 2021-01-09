## [151. 翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)
2020-06-27
### 思路
第一次尝试中等难度的题，思路受阻，不知道该怎么分割出多个空格的单词，不想去循环。  
看了解答之后才发现split是可以传入正则去匹配多个空格的! 看来得找时间好好看看正则了啊！
### code
```js
function reverseWords(s: string): string {
    return s.trim().split(/\s+/).reverse().join(' ')
};
```
> 创建正则表达式： var re = /ab+c/;  
\s 匹配一个非空白字符  
\+ 匹配前面一个表达式 1 次或者多次