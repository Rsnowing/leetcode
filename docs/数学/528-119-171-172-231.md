# 关于数学的简单题
## 528 [杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)
### 思路
数组首位 | 最后一位 =》 值为1，否则值为 result[i-1][j-1] + result[i-1][j]
### code
```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    for (let i = 0;  i < numRows; i++) {
        let curRow = []
        for (let j = 0;  j <= i; j++) {
            if (j === 0 || j === i) {
                curRow.push(1)
            } else {
                curRow.push(result[i-1][j-1] + result[i-1][j])
            }
        }
        result[i] = curRow
    }
    return result
};
```
## 119 [杨辉三角-二](https://leetcode-cn.com/problems/pascals-triangle-ii/)
### 思路
膜拜大神做法，我还是用的上一个做法
### code
```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1]
    let list = [1]
    for(let i = 0; i < rowIndex ; i++) {
        list.unshift(0)
        for(let j = 0; j < i + 1 ;j++) {
            list[j] = list[j] + list[j+1]
        }
    }

    return list
};
```

## 171 [Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/)
### 思路
将26进制转为10进制
### code
```js
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const arr = s.split(''),
        len = arr.length
    return arr.reduce((acc, cur, index) => {
        acc += (cur.charCodeAt() - 65 + 1) * Math.pow(26, len - index -1)
        return acc
    }, 0)

};
```
### 比较快的解法
```js
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var num = s[i].charCodeAt() - 64;
        result = result * 26 + num
    }
    return result;
};
```

> str.charCodeAt() 获取字符的ASCII码  
String.fromCharCode(code) 将ASCII码转为字符

## [172阶乘后的零](https://leetcode-cn.com/problems/factorial-trailing-zeroes/)
### 思路
一开始我的想法就是获得到n的阶乘，然后由结果去计算得到0的个数。害还是太年轻啊，阶乘很容易就溢出了，不适用于此题的答案。看了很多优秀的回答，整理一下思路：
尾0产生的条件：非0数乘以10会得到一个尾0。10 = 2 * 5 =》 非0数 * 2 * 5即可得到一个尾0。
在任何阶乘中2的倍数总是大于5的倍数，因此只要去看5的倍数有多少个即可。
有一些特殊的数字：
25 = 5 * 5，可以化成2个5；
125 = 5 * 5 * 5，可以化成3个5；.....以此类推
```js
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0
    for (let i = 5; i <= n; i = i * 5) {
        count += Math.floor(n / i)
    }
    return count
};
```

```js
var trailingZeroes = function(n) {
    let count = 0
    while(n >= 5) {
        count += Math.floor(n / 5)
        n = n / 5
    }
    return count
};
```

## [231-2的幂](https://leetcode-cn.com/problems/power-of-two/)
2020-06-02
### 思路
1. 让n一直对2求余，若最后===1,则是2的幂
2. 利用万能的按位操作符： 对于2的幂 n, 总有 (n & n - 1) === 0   

### code
```js
var isPowerOfTwo = function(n) {
    // return n > 0 && !( n & n - 1) // 思路2的解法
    if (n <= 0) return false
    while (n % 2 === 0) {
        n = n / 2
    }
    return n === 1
};
```

### 逻辑操作符 知识补充

| 运算符            | 用法      | 描述                                                         |
| :---------------- | :-------- | :----------------------------------------------------------- |
| 按位与（ AND）    | `a & b`   | 对于每一个比特位，只有两个操作数相应的比特位都是1时，结果才为1，否则为0。 |
| 按位或（OR）      |  `a \| b` | 对于每一个比特位，当两个操作数相应的比特位至少有一个1时，结果为1，否则为0。 |
| 按位异或（XOR）   | `a ^ b`   | 对于每一个比特位，当两个操作数相应的比特位有且只有一个1时，结果为1，否则为0。 |
| 按位非（NOT）     | `~ a`     | 反转操作数的比特位，即0变成1，1变成0。                       |
| 左移（Left shift) | `a << b`  | 将 `a` 的二进制形式向左移 `b` (< 32) 比特位，右边用0填充。   |
| 有符号右移        | `a >> b`  | 将 a 的二进制表示向右移` b `(< 32) 位，丢弃被移出的位。      |
| 无符号右移        | `a >>> b` | 将 a 的二进制表示向右移` b `(< 32) 位，丢弃被移出的位，并使用 0 在左侧填充。 |


