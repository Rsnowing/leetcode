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