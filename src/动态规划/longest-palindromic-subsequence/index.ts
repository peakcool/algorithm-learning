/**
 * 题目: 516. 最长回文子序列
 * 链接: https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * 定义dp数组 dp[i][j]
 * 求dp[i][j]，相当于求 dp[i + 1][j - 1]范围，再判断 s1[i], s2[j]字符串是否相等
 * 若相等 dp[i][j] = dp[i + 1][j - 1] + 2
 * 若不等 dp[i][j] = max(dp[i][j - 1], dp[i + 1][j]) 
 */
function longestPalindromeSubseq(s: string): number {
    const nums: number = s.length;

    let dp: Array<Array<number>> = Array.from({length: nums + 1}, function() {
        return Array(nums + 1).fill(0);
    });

    for(let i: number = 0; i < nums; i++) {
        dp[i][i] = 1;
    }

    for(let i: number = nums - 1; i >= 0; i--) {
        for(let j: number = i + 1; j < nums; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(
                    dp[i][j - 1],
                    dp[i + 1][j]
                );
            }
        }
    }

    return dp[0][nums - 1];
};