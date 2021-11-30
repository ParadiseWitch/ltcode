import java.util.*;

/*
 * @lc app=leetcode.cn id=17 lang=java
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (57.19%)
 * Likes:    1522
 * Dislikes: 0
 * Total Accepted:    338.6K
 * Total Submissions: 591.5K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
class Solution17 {
  public static List<String> letterCombinations(String digits) {
    String digitletter[] = { "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };
    List<String> result = new ArrayList<String>();

    if (digits.length() == 0)
      return result;

    result.add("");
    for (int i = 0; i < digits.length(); i++)
      result = combine(digitletter[digits.charAt(i) - '0'], result);

    return result;
  }

  public static List<String> combine(String digit, List<String> l) {
    List<String> result = new ArrayList<String>();

    for (int i = 0; i < digit.length(); i++)
      for (String x : l)
        result.add(x + digit.charAt(i));

    return result;
  }
}

// @lc code=end

