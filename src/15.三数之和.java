import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * @lc app=leetcode.cn id=15 lang=java
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (33.34%)
 * Likes:    3797
 * Dislikes: 0
 * Total Accepted:    654.4K
 * Total Submissions: 2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
class Solution15 {

  // public static void main(String[] args) {
  //   System.out.println(threeSum(new int[] { -1, 0, 1, 2, -1, -4 }));
  // }

  // public static List<List<Integer>> threeSum(int[] nums) {
  public List<List<Integer>> threeSum(int[] nums) {
    int len = nums.length;
    Arrays.sort(nums);
    List<List<Integer>> ans = new ArrayList<List<Integer>>();
    for (int i = 0; i < len; i++) {
      int n1 = nums[i];
      if (i > 0 && n1 == nums[i - 1])
        continue;
      for (int j = i + 1; j < len; j++) {
        int n2 = nums[j];
        if (j > i + 1 && n2 == nums[j - 1])
          continue;
        int k = len - 1;
        int target = 0 - n1 - n2;
        while (k > j && nums[k] > target) {
          k--;
        }
        if (j == k)
          break;
        if (nums[k] == target) {
          List<Integer> arrayList = new ArrayList<Integer>();
          arrayList.add(n1);
          arrayList.add(n2);
          arrayList.add(nums[k]);
          ans.add(arrayList);
        }
      }
    }
    return ans;
  }

}
// @lc code=end
