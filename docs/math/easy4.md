## [换酒问题](https://leetcode-cn.com/problems/water-bottles/)
2020-08-06
好久没有刷题了
### 思路
计算空瓶子
```js
function numWaterBottles(numBottles: number, numExchange: number): number {
    let count = numBottles
    let blankBottles = numBottles
    while (blankBottles >= numExchange) {
        const num = parseInt((blankBottles / numExchange) + '')
        count += num
        blankBottles = num + blankBottles % numExchange
    }
    return count
};
```