/** 
 * @Desc: 最基础二分查找法
 * @link https://leetcode-cn.com/problems/binary-search/
 * 时间复杂度：O(logn)
 * 空间复杂度：O(1)
 */
function search(nums: number[], target: number): number {

    let start: number = 0;
    let end: number = nums.length - 1;

    while(start <= end) {
        let mid: number = Math.round(start + (end - start) / 2);
        if (nums[mid] === target ) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};