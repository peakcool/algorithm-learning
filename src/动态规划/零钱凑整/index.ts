/** 
 * @Author: TangLiangcheng 
 * @Date: 2020-06-22 23:39:59 
 * @Desc: 518. 零钱兑换 II
 * @link: https://leetcode-cn.com/problems/coin-change-2/
 */
function change(amount: number, coins: number[]): number {

    //定义dp数组
    const n: number = coins.length;
    let dp: Array<Array<number>> = new Array(n + 1).fill(new Array(amount + 1).fill(0));
    
    //处理特殊情况
    if (amount === 0) return 1;

    for (let i:number = 1; i <= n; i++) {
        dp[i][0] = 1;
    }
    
    for(let i:number = 1; i <= n; i++) {
        for(let j:number = 1; j <= amount; j++) {
            //放入dp数组的条件，即钱还没凑完
            if (j - coins[i - 1] >= 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    } 

    return dp[n][amount];
};

change(5, [1, 2, 5]); //4