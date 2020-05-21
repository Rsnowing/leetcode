// export default (str) => {
//     let arr = str.split(' '),
//     result = arr.map(item => {
//         return item.split('').reverse().join('')
//     })
//     return result.join('  ')
// }
// 09 回文数字
var isPalindrome = function (x) {
    if (x < 0) return false
    x = x.toString()
    let len = x.length

    for (let i = 0, back = len - 1 - i; i < back, back > 0; i++, back--) {
        if (x[i] !== x[back]) {
            return false
        }
    }
    return true
};
isPalindrome(10)

// 13 罗马数字 =》 数字
var romanToInt = function (s) {
    let map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    let arr = s.split(''),
        len = arr.length,
        sum = 0


    for (let i = 0; i < len; i++) {
        if (map[arr[i]] < map[arr[i + 1]]) {
            sum += map[arr[i + 1]] - map[arr[i]]
            i++
        } else {
            sum += map[arr[i]]
        }
    }
    return sum
};
// console.log(romanToInt('LVIII'))

// 14 最长前缀
var longestCommonPrefix = function (strs) {
    if (!strs[0]) return "";
    let res = "", cur = "", i = strs[0].length;
    while (i > 0) {
        cur = strs[0].substring(0, i + 1);
        let flag = strs.every(x => {
            return x.startsWith(cur);
        })
        if (flag) {
            return cur
        }
        i--;
    }
    return '';
};

// console.log(longestCommonPrefix(["c", "acc", "ccc"]))
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// 21 合并两个有序链表
var mergeTwoLists = function (l1, l2) {
    var mergedHead = { val: -1, next: null },
        crt = mergedHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;

    return mergedHead.next;
};
let l1 = {
    val: 1, next: {
        val: 2, next: {
            val: 4, next: null
        }
    }
},
l2 = {
    val: 1, next: {
        val: 3, next: {
            val: 4, next: null
        }
    }
}
// console.log(mergeTwoLists(l1,l2))

// 26 删除数组中重复项
var removeDuplicates = function (nums) {
    let len = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

var removeDuplicates1 = function (nums) {
    nums = Array.from(new Set(nums))
    console.log(nums)
    return nums.length
};
// removeDuplicates([0, 0, 1, 1, 1])
// console.log(removeDuplicates1([1, 1, 2]))

// 35 最长子序列
var maxSubArray = function (nums) {
    if (!nums.length) return;
    let max = -Number.MAX_VALUE,
        prev = 0,
        len = nums.length
    for (let i = 0; i < len; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        max = Math.max(prev, prev + nums[i])
    }
    return max
};

// console.log(maxSubArray([-2, 1, -3, 4]))

// 66 加一
var plusOne = function (digits) {
    // let str = digits.join(''),
    //     num = str - 0,
    //     result = (num + 1).toString()
    // return result.split(',').join(',').split('')
    let len = digits.length;

    for (let i = len - 1; i >= 0; i--) {
        debugger
        if (digits[i] < 9) {
            digits.splice(i, 1, digits[i] + 1)
            return digits
        } else {
            digits[i] = 0
        }

        digits.unshift(1)
        return digits
    }
};
// console.log(plusOne([9, 9]))

// 二进制加法
var addBinary = function (a, b) {
    let len1 = a.length,
        len2 = b.length,
        len = len1 > len2 ? len1 : len2,
        result = '',
        flag = 0
    for (let i = len1 - 1, j = len2 - 1; i >= 0 || j >= 0; i-- , j--) {
        let numa = i >= 0 ? a[i] - 0 : 0,
            numb = j >= 0 ? b[j] - 0 : 0,
            num = numa + numb + flag
        result = num % 2 + result
        flag = parseInt(num / 2)
    }
    return flag ? 1 + result : result
};
// console.log(addBinary("100","110010"))

// 680 
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0 , r = s.length - 1
    while (l < r) {
        if (str[l] !== str[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
        }
        l++
        r--
    }
    return true
    // s = s.split('')
    // let len = s.length,
    //     count = 0
    // for (let i = 0; i < len / 2; i++) {
    //     if (s[i] !== s[len - i - 1]) {
    //         count += 1
    //         if (count > 1) return false
    //         len = len - 1
    //         s.splice(i, 1)
    //         i -= 1
    //     } 
    // }
    // return true
};
/** 判断是否为回文数 */
function isPalindrome(str, l, r) {
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }
    return true
}
console.log(validPalindrome('cbbcc'))