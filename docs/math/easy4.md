## [换酒问题](https://leetcode-cn.com/problems/water-bottles/)
2020-08-06
好久没有刷题了,还是一次性写出了这个题嘻嘻嘻
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

## [1512. 好数对的数目](https://leetcode-cn.com/problems/number-of-good-pairs/)
### 思路
虽然一次性写出来，但是不是最优解，但已经00：02了...
### code 
```js
function numIdenticalPairs(nums: number[]): number {
    const len = nums.length
    nums = nums.sort((a,b) => a - b)
    let count = 0
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) { 
            if (nums[i] === nums[j]) {
                count++
            } else {
                break
            }
        }
    }
    return count
};
```