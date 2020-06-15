## [191-位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)
## 思路
转成字符串累加====》 LOW!   
看了题解，比较有趣的思路：`n & (n - 1)` 可以消除 n 最后的一个1的原理
## code
```js
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = (n.toString(2)).split('')
    return n.reduce((acc, cur) => {
        acc += cur === '1' ? 1 : 0
        return acc
    }, 0)
};
```
> 1. Number.prototype.toString([radix]) =》 返回指定 Number 对象的字符串表示形式。radix 表示基数，默认为10
```js
var hammingWeight = function(n) {
    let count = 0
    while (n != 0) {
        count ++
        n = n & (n - 1)
    }
    return count
};
```

## [342. 4的幂](https://leetcode-cn.com/problems/power-of-four/)
### 思路
2020-06-15
最近刚好在学习ts,就用ts写题解吧
1. 循环，间隔为4   
注意循环从1开始，从0开始就死循环啦
```js
function isPowerOfFour(num: number): boolean {
    for (let i = 1; i <= num; i *= 4) {
        if (num === i) {
            return true
        }
    }
    return false
};
```
2. 巧妙的位运算
将数字转成4进制，最高位为1，其余位为0
```js
function isPowerOfFour(num: number): boolean {
    const b: string  = num.toString(4)
    for (let i = 1; i < b.length; i++) {
        if (b[i] !== '0') {
            return false
        }
    }
    return b[0] === '1'
};
```