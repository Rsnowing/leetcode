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

## [258. 各位相加](https://leetcode-cn.com/problems/add-digits/)
2020-06-16
### 思路 
思想很直，对各数求和，大于10继续求。  
虽然看到了题目描述中的`进阶:你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？`,但是我仍然先忽略了，因为我刷题的目的不仅仅是了解巧妙的算法，而是练习ts语法 + 保持思维 。对于初级刷题选手来说，做出来比巧妙的做更能提高信心。
```js
function addDigits(num: number): number {
    let arr = numberToArr(num)
    let sum = add(arr)
    while (sum >= 10) {
        sum = add(arr)
        arr = numberToArr(sum)
    }
    return sum
};
// 数字转数字型数组
function numberToArr(num: number):number[] {
    return Number(num).toString().split('').map(Number)
}
// 数组求和
function add(arr: number[]):number {
    return arr.reduce((acc: number, cur:number) => {
        acc += cur
        return acc
    }, 0)
}
```
提交之后发现，ts的提交中只打败50%的同学，说明还有另外一个同学用ts写了，我去瞅了下，吃惊
```js
var addDigits = function(num: number): number {
    return (num - 1) % 9 + 1;
};
```
一番调查之后 ，发现原来题目中所求的数叫数根。   
[如何证明一个数的数根(digital root)就是它对9的余数](https://www.zhihu.com/question/30972581/answer/50203344)   
[关于本题更详细的解题思路](https://leetcode-cn.com/problems/add-digits/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-5-7/)