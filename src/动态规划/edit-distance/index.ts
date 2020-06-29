//用两个指针i，j 指向w1，w2最后，倒叙比较
//所以 i = w1.length - 1； j = w2.length - 1
//对比时，存在4种可能
// w1[i] == w2[j] => dp(i - 1, j - 1)
// w1[i] != w2[j] => {
//    dp(i-1, j) 删除
//    dp(i, j - 1) 新增
//    dp(i - 1, j - 1) 替换
// }
//
// 最后，处理重复，增加备忘录
function minDistance(word1: string, word2: string): number {
    const i:number = word1.length - 1;
    const j:number = word2.length - 1;
    let memo: Array<Array<number>> = Array.from({length: i + 1}, () => new Array(j + 1).fill(0));

    return minDistanceDp(memo, i, j, word1, word2)
};

function minDistanceDp(memo: Array<Array<number>>, i: number, j: number, w1: string, w2: string): number {
    if (i == -1) return j + 1;
    if (j == -1) return i + 1;

    if (memo[i][j] != 0) {
        return memo[i][j];
    }

    if (w1[i] == w2[j]) {
        memo[i][j] = minDistanceDp(memo, i - 1, j - 1, w1, w2);
    } else {
        const del: number = minDistanceDp(memo, i - 1, j, w1, w2) + 1;
        const insert: number = minDistanceDp(memo, i, j - 1, w1, w2) + 1;
        const replace: number = minDistanceDp(memo, i - 1, j - 1, w1, w2) + 1;
        memo[i][j] =  Math.min(
            del,
            insert,
            replace
        );
    }
    return memo[i][j];
}