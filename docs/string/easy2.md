## [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)
### 思路
这大概是最简单的题了
### code
利用数组的反转
```js
function reverseString(s: string[]): void {
    s.reverse()
};
```
循环首尾替换
```js
function reverseString(s: string[]): void {
    const len = s.length
    for (let i = 0; i < len / 2; i++) {
        let temp = s[i]
        s[i] = s[len - i -1]
        s[len - i -1] = temp
    }
};
```
## [686. 重复叠加字符串匹配](https://leetcode-cn.com/problems/repeated-string-match/)
### 思路
刚开始被一些想法卡住了，比如叠加多少次才能判断出不匹配，如果B中有A中没有的字母要怎么去判断，一想这题没法做了，判断条件太多了。后来看了解析，有点恍然大悟，我的想法都是从反面去考虑，既然反面考虑不通，那就看看从正面出发。  

| A    | B      | n                                  |
| ---- | ------ | ---------------------------------- |
| ab   | abab   | B.length / A.length                |
| ab   | ababa  | Math.ceil(B.length / A.length)     |
| ab   | bababa | Math.ceil(B.length / A.length) + 1 |

```js
function repeatedStringMatch(A: string, B: string): number {
    let count = Math.ceil(B.length / A.length)
    A = A.repeat(count)
    return A.includes(B) ? count : ((A + A).includes(B) ? count + 1 : -1)
};
```