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

## 117 [Excel表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/)
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
String.fromCharCode(num) 将ASCII码转为字符
