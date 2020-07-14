/**
 * 题解: 392. 判断子序列
 * 链接: https://leetcode-cn.com/problems/is-subsequence/
 * if (t[m] === s[n])
 */
function isSubsequence(s: string, t: string): boolean {
    let m: number = t.length;
    let n: number = s.length;
    let memo: Array<Array<number>> = Array.from({length: m + 1}, () => {
        return new Array(n + 1).fill(0);
    });

    function dp(memo: Array<Array<number>>, i: number, j: number): number {
        if (j === -1 || i === -1) {
            return 0;
        }
        if (memo[i][j]) return memo[i][j];

        if (t[i] === s[j]) {
            memo[i][j] = dp(memo, i - 1, j - 1) + 1;
        } else {
            memo[i][j] = dp(memo, i - 1, j);
        }

        return memo[i][j];
    }

    return dp(memo, m - 1, n - 1) >= n;
};