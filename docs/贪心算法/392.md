# 解释
贪心算法必须具备后无效性，也就是不必考虑前面的影响，只需考虑当前的状态。

## [392. 判断子序列](https://leetcode-cn.com/problems/is-subsequence/)
2020-07-07
### 思路
基本思路是遍历短字符串，利用indexOf查找。没有想到的是贪心算法，每次计算过后，前面可以不用再考虑了。
### code
```js
function isSubsequence(s: string, t: string): boolean {
    for (let i = 0; i < s.length; i++) {
        const index = t.indexOf(s[i])
        if (index > -1) {
            t = t.substr(index + 1)
        } else {
            return false
        }
    }
    return true
};
```
[参考链接](https://leetcode-cn.com/problems/is-subsequence/solution/mei-tian-yi-dao-suan-fa-ti-tan-xin-suan-fa-by-one-/)