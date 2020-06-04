## [198 打家劫舍](https://leetcode-cn.com/problems/house-robber/)
2020-06-04
### 思路
经过一番思考，毫无思路。没有接触过动态规划的题
### code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if(len == 0)
        return 0;
    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    return dp[len];
};
```
> 动态规划方程：dp[n] = MAX( dp[n-1], dp[n-2] + num )
### 参考
[画解动态规划](https://leetcode-cn.com/problems/house-robber/solution/hua-jie-suan-fa-198-da-jia-jie-she-by-guanpengchn/)