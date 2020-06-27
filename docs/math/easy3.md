## [628. 三个数的最大乘积](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/)
### 思路
0. 先给数组从小到大排序
1. 当数组中的数全部是正数 =》 最后3个数的乘积 最大
2. 当数组中的数包含负数，=》 最小的2个负数和最大的正数乘积 最大
```js
function maximumProduct(nums: number[]): number {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let res1 = nums[0] * nums[1] * nums[len - 1],
        res2 = nums[len - 1] * nums[len - 2] * nums[len - 3]
    return Math.max(res1, res2)
};
```