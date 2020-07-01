//类背包问题，题目转换为：恰好存在一种装法，一个包正好装（总价值 / 2）的物品
//状态：容量、价值
//条件：dp[i][j] = sum / 2 => true
//状态转移方程: dp[i][j] = dp[i-1][j] + dp[i-1][j - nums[i-1]]
function canPartition(nums: number[]): boolean {
    let sum:number = 0;
    nums.forEach((v) => { sum += v }); //计算总值
    
    if (sum % 2 !== 0) return false; //奇数和时
    const n:number = nums.length;
    const halfSum:number = sum / 2;

    let dp1: Array<Array<boolean>> = Array(n + 1).fill(Array(halfSum + 1).fill(false));
    let dp2: Array<Array<boolean>> = Array.from({ length: n + 1 }, () =>
        new Array(halfSum + 1).fill(false));

    console.log('dp2', JSON.stringify(dp2))
    console.log('dp1', JSON.stringify(dp1))

    /**----------- */
    var dp = dp1 // => 最终return true
    // var dp = dp2 // => 最终return false
    /**----------- */

    for(let i: number = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    for(let i: number = 1; i <= n; i++) {
        for(let j:number = 1; j <= halfSum; j++) {
            if (j - nums[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n][halfSum];
};

console.log(canPartition([2, 2, 3, 5]));