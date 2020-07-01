/**
 * 找出2个状态，鸡蛋个数 K, 楼层树 N, 所以声明二维dp数组 dp[m][n] = 找出最坏情况的最少步数
 * 选择： 在那一楼扔鸡蛋 => F
 * 判断条件：鸡蛋没碎 or 碎了 => 此时
 * 若碎了，即鸡蛋减少1 => K -1, 重新再找F 往下的楼层 => [1, F - 1]
 * 若没碎，即鸡蛋数量不变 => K, 重新再找F 往上的楼层 => [F + 1, N]
 */
function superEggDrop(K: number, N: number): number {
    var memo: Array<Array<number>> = Array.from({length: K + 1}, () => new Array(N + 1).fill(0));
    const superEggDropDp = function superEggDropDp(k: number, n: number): number {
        let count: number = n;

        if (memo[k][n] != 0) {
            return memo[k][n]
        }

        if (k == 1) return n;
        if (n == 0) return 0;
        for(let i:number = 1; i <= n; i++) {
            count = Math.min(count, Math.max(
                superEggDropDp(k - 1, i - 1), //碎了
                superEggDropDp(k, n - i), //没碎
            ) + 1)
        }
        memo[k][n] = count;
        return count;
    }
    return superEggDropDp(K, N);
};

console.log(superEggDrop(2, 7))