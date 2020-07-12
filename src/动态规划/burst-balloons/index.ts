/**
 * 题目: 312. 戳气球
 * 链接: https://leetcode-cn.com/problems/burst-balloons/
 * 
 * 编号 0 到 n-1 的 戳破最大值
 * 
 * 即
 * 
 * 最后戳破的气球是哪一个？能让和最大 => 动态规划
 * 因为 -1， n 的值为1
 * 
 * 即
 * 
 * 第0个气球，值为 1 * nums[0] * nums[1]
 * 第n个气球，值为 nums[n - 1] * nums[n] * 1
 * 
 * 将-1， n加入，扩张以前有n个气球，变为 n + 2个气球，并且 nums[-1] = 1， nums[n] = 1；
 * 根据动态规划
 * 
 * 设 dp[i][j]，其中i，j为 戳破区间i，j 开区间的和最大值
 * 0 <= i <= n + 1 
 * j <= i + 1
 * 
 * 假设区间i,j中戳破最后的是 k，则
 * 
 * 状态转移方程 dp[i][j] = dp[i][k] + dp[k][j] + points[i] * points[k] * points[j]
 */
function maxCoins(nums: number[]): number {
    const n: number = nums.length;
    nums.push(1);
    nums.unshift(1); // nums => nums[0] = nums[n + 1] = 1;

    let dp: Array<Array<number>> = Array.from({length: n + 2}, () => {
        return Array(n + 2).fill(0);
    })

    for (let i: number = n; i >= 0; i--) {
        for(let j: number = i + 1; j < n + 2; j++) {
            for (let k:number = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j],
                dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]);
            }
        }
    }

    return dp[0][n + 1];    
};

//[1,2,3,5] => 50