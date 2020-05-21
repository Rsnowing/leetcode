// 2019 09 09 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length, num, map = {};
    for (let i = 0; i < len; i++) {
        num = target - nums[i]
        // key in obj 检测对象中是否存在某个属性
        console.log(map)
        if (num in map) {
            return [map[num], i]
        }
        map[nums[i]] = i
    }

    return null
};
twoSum([1,2, 4,5,6,7,9], 9)