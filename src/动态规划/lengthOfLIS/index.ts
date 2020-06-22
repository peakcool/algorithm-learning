/** 
 * @Author: TangLiangcheng 
 * @Date: 2020-06-18 22:45:32 
 * @Desc: 时间复杂度 O(n^2) 
 * 状态转移方程 dp[i] = max(dp[i], dp[j] + 1)
 * (j=1, 2, 3 ... i - 1 && A[i] > A[j])
 */
function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0;
    let dp: number[] = new Array(nums.length).fill(1);
    for(let i:number = 0; i < nums.length; i++) {
        for(let j: number = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    const count: number = Math.max(...dp);
    return count;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4