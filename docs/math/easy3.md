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

## [665. 非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/)
2020-06-28
### 思路 
一开始想要用splice做，失败了，看了解答，也云里雾里/
### code
```js
function checkPossibility(nums: number[]): boolean {
    const len = nums.length
    if (len < 3) return true
    let count = 0
    if (nums[0] > nums[1]) count++
    for (let i = 1; i < len - 1; i++) {
        let left = nums[i - 1]
        let right = nums[i + 1]
        if (nums[i] > nums[i + 1]) {
            count++
            if (count > 1) return false
            if (left > right) {
                nums[i + 1] = nums[i]
            } else {
                nums[i] = right
            }
        }
    }
    return true
};
```

## [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)
### code
```js
// 因为多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。所以 n/2 处的元素一定是多数元素
function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a -b)
    return nums[Math.floor(nums.length / 2)]
};
```
解法2
```js
// 统计每个元素出现的次数，当次数>n/2时返回
function majorityElement(nums:number[]): number {
  let half = Math.floor(nums.length / 2);
  let map = new Map();
  for (let item of nums) {
    if (map.has(item)) {
      let num = map.get(item);
      map.set(item, num + 1);
      if (num + 1 > half) {
        return item;
      }
    } else {
      map.set(item, 1);
    }
  }
  return nums[0];
}
```