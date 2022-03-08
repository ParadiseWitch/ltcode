import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=16 lang=java
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.96%)
 * Likes:    889
 * Dislikes: 0
 * Total Accepted:    259.8K
 * Total Submissions: 565.5K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 * 
 * 
 */

// @lc code=start
class Solution16 {

  // public static void main(String[] args) {
  //   System.out.println(threeSumClosest(new int[] { 1, 1, -1, -1, 3 }, -1));
  // }

  // public static int threeSumClosest(int[] nums, int target) {
  public int threeSumClosest(int[] num, int target) {
    int result = num[0] + num[1] + num[num.length - 1];
    Arrays.sort(num);
    for (int i = 0; i < num.length - 2; i++) {
      int start = i + 1, end = num.length - 1;
      while (start < end) {
        int sum = num[i] + num[start] + num[end];
        if (sum == target) {
          return target;
        }
        if (sum > target) {
          end--;
        } else {
          start++;
        }
        if (Math.abs(sum - target) < Math.abs(result - target)) {
          result = sum;
        }
      }
    }
    return result;
  }
}
// @lc code=end
