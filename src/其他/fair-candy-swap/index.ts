/** 
 * @Date: 2020-07-02 13:04:41 
 * @Desc: 888. 公平的糖果交换
 * diff = (sumA + sumB) / 2
 * 存在关系 A[i] = B[j] + diff
 * 
 * 即问题转换为，在数组A，数组B中查找是否有值满足这一关系
 */
function fairCandySwap(A: number[], B: number[]): number[] {
    let sumA: number = 0;
    let sumB: number = 0;
    A.map((item) => sumA += item);
    B.map((item) => sumB += item);

    let diff: number = (sumA - sumB) / 2;
    let dp: Array<number> = new Array(2).fill(0);
    for(let i: number = 0; i < A.length; i++) {
        for(let j: number = 0; j < B.length; j++) {
            if (A[i] - B[j] === diff) {
                dp[0] = A[i];
                dp[1] = B[j];
            }
        }
    }

    return dp;
};