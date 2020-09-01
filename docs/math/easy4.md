## [换酒问题](https://leetcode-cn.com/problems/water-bottles/)

2020-08-06
好久没有刷题了,还是一次性写出了这个题嘻嘻嘻

### 思路

计算空瓶子

```js
function numWaterBottles(numBottles: number, numExchange: number): number {
  let count = numBottles;
  let blankBottles = numBottles;
  while (blankBottles >= numExchange) {
    const num = parseInt(blankBottles / numExchange + '');
    count += num;
    blankBottles = num + (blankBottles % numExchange);
  }
  return count;
}
```

## [1512. 好数对的数目](https://leetcode-cn.com/problems/number-of-good-pairs/)

### 思路

虽然一次性写出来，但是不是最优解，但已经 00：02 了...

### code

```js
function numIdenticalPairs(nums: number[]): number {
  const len = nums.length;
  nums = nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}
```

## [1502. 判断能否形成等差数列](https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/)
2020-09-01
简单的题

### 思路：

排序 两两比较。可以优化的点是，一开始我的判断是，arr[i] - arr[i + 1] !== arr[i + 1] - arr[i + 2] 其实可以一开始就记录差值

```js
function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length <= 2) return true;
  arr = arr.sort((a, b) => a - b);
  let i = 1;
  let dis = arr[0] - arr[1];
  while (i <= arr.length - 2) {
    if (arr[i] - arr[i + 1] !== dis) {
      return false;
    }
    i++;
  }
  return true;
}
```
