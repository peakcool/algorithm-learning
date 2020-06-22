/** 
 * @Author: TangLiangcheng 
 * @Date: 2020-06-19 21:32:51 
 * @Desc: 70. 爬楼梯
 * @link: https://leetcode-cn.com/problems/climbing-stairs/
 * 类斐波拉契数
 * 画出二叉树，理解缓存
 */
function climbStairs(n: number): number {
    let list: number[] = new Array(n + 1);
    list.fill(0);
    return helper(list, n);
};

function helper(list: number[], n: number): number {
    if(n === 1) return 1;
    if(n === 2) return 2;
    if (list[n] != 0) return list[n];
    list[n] = helper(list, n - 1) + helper(list, n - 2);
    return list[n];
}