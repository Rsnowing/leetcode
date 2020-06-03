# 与number相关的简单题
## 202 [快乐数](https://leetcode-cn.com/problems/happy-number/)
2020-05-22
### 思路
将平方和记录下来，若数组中出现了平方和，则表示出现循环，不可能快乐~！
### code
```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum = getSum(n)
    let arr = [sum]
    while (sum !== 1) {
        sum = getSum(sum)
        if (arr.indexOf(sum) !== -1) {
            return false
        }
        arr.push(sum)
    }
    return true
};

function getSum(num) {
    num = num + ''
    let sum = 0
    for (let n of num) {
        sum += n * n
    }
    return sum
}
```
### 优化
> 1. 求平方 =》 Math.pow(num, 2)
2. 求和函数优化
3. 对数组的查找 =》 对对象查找

```js
// 求和优化
function getSum(num) {
    return (num + '').split('').reduce((acc, cur) => {
        return acc + Math.pow(cur, 2)
    },0)
}
// 对象查找
var isHappy = function(n) {
    let obj = {}
    while (n !== 1 && !obj[n]) {
        obj[n] = true
        n = getSum(n)
    }
    return true
}
```

## [263-丑数](https://leetcode-cn.com/problems/ugly-number/)
2020-06-03
### 思路
很开心，一个没有看别人的思路自己独立解的题
对数值/2/3/5  
### code
```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num === 0) return false
    if (num === 1) return true
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2
        } else if (num % 3 === 0) {
            num = num / 3
        } else if (num % 5 === 0) {
            num = num / 5
        } else {
            return false
        }
    }
    return true
};
```