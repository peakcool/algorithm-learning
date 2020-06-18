"use strict";
/**
 * @Author: TangLiangcheng
 * @Date: 2020-06-18 22:45:32
 * @Desc: 时间复杂度 O(n^2)
 */
function lengthOfLIS(nums) {
    if (nums.length === 0)
        return 0;
    var dp = new Array(nums.length).fill(1);
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    var count = Math.max.apply(Math, dp);
    return count;
}
;
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
