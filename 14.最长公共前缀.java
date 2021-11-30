/*
 * @lc app=leetcode.cn id=14 lang=java
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (40.74%)
 * Likes:    1789
 * Dislikes: 0
 * Total Accepted:    621.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
class Solution14 {
  // public static String longestCommonPrefix(String[] strs) {
  public String longestCommonPrefix(String[] strs) {
    int len = strs.length;
    if (len < 1) {
      return "";
    }
    int i = 0;
    int s1len = strs[0].length();
    while (i < s1len) {
      for (int j = 1; j < len; j++) {
        if (strs[j].length() < i + 1 || strs[j].charAt(i) != strs[0].charAt(i)) {
          return strs[0].substring(0, i);
        }
      }
      i++;
    }
    return strs[0];
  }

  // public static void main(String[] args) {
  //   // System.out.println("amaidfasfs".substring(1,1));
  //   System.out.println(longestCommonPrefix(new String[] { "ab", "a" }));
  // }
}
// @lc code=end
