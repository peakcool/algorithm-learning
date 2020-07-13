/**
 * 题解: 1143. 最长公共子序列
 * 链接: https://leetcode-cn.com/problems/longest-common-subsequence/
 * @param text1 
 * @param text2 
 * 
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    const m:number = text1.length;
    const n:number = text2.length;

    let memo: Array<Array<number>> = Array.from({length: m}, () =>          new Array(n).fill(0));

    function dp(memo: Array<Array<number>>, i:number, j:number): number {

        if (i === -1 || j === -1) return 0;

        if (memo[i][j]) return memo[i][j];

        if (text1[i] === text2[j]) {
            memo[i][j] = dp(memo, i - 1, j - 1) + 1; 
        } else {
            memo[i][j] = Math.max(
                dp(memo, i - 1, j),
                dp(memo, i, j - 1),
                dp(memo, i - 1, j - 1)
            );
        }

        return memo[i][j];
    }

    return dp(memo, m - 1, n - 1);
};