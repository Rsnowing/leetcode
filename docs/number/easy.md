# 与number相关的简单题
## [202 快乐数](https://leetcode-cn.com/problems/happy-number/)
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
对数值/2/3/5  
很开心，一个没有看别人的思路自己独立解的题。但是没有考虑到0对于任何数求余都是0的情况，导致时间超出；还有没有看见题目中所说的1是丑数这个特例~
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

## [204计数质数](https://leetcode-cn.com/problems/count-primes/)
2020-06-10
### 思路
一看到题，我的第一想法，哇好简单，遍历判断质数完成，然后执行了超出时间限制！！
```js
// 脑回路简单的做法 =》 超出时间限制 不可取
var countPrimes = function(n) {
    if (n <= 2) return 0
    let count = 1 // 2是最小质数 
    n = n-1
    while (n > 2) {
        if (isPrimes(n)) {
            count++
        }
        n--
    }
    return count
};

function isPrimes(num) {
    let point = num % 2 === 0 ? num / 2 : (num + 1) / 2
    while (point > 1) {
        if (num % point === 0) {
            return false
        }
        point--
    }
    return true
}
```
看了大神们的解答，  奇怪的算法知识又增加了！
### 厄拉多塞筛法
[题解](https://leetcode-cn.com/problems/count-primes/solution/ji-shu-zhi-shu-bao-li-fa-ji-you-hua-shai-fa-ji-you/)  

每计算一个数，都要把它的倍数去掉。到了n，数一下留下了几个数。
```js
var countPrimes = function(n) {
    let arr = new Array(n + 1)
    let count = 0
    for (let i = 2; i < n; i++) {
        if (!arr[i]) {
            count++
            // 从 i的2倍，3倍。。。
            for (let j = 2 * i; j < n; j = j + i) {
                arr[j] = true
            }
        }
    }
    return count
}
```
> let n = 3  
n = n--   // n = 3  
n-- // n =  2   

## [283移动0](https://leetcode-cn.com/problems/move-zeroes/)


