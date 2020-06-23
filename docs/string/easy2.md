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

