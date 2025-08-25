/*
 * @lc app=leetcode.cn id=42 lang=java
 *
 * [42] 接雨水
 */

// @lc code=start
class Solution {
    public int trap1(int[] height) {
        int[] lMax = new int[height.length];
        int[] rMax = new int[height.length];
        lMax[0] = height[0];
        for (int i = 1; i < height.length; i++) {
            lMax[i] = Math.max(lMax[i - 1], height[i]);
        }
        rMax[height.length - 1] = height[height.length - 1];
        for (int i = height.length - 2; i >= 0; i--) {
            rMax[i] = Math.max(rMax[i + 1], height[i]);
        }
        int sum = 0;
        for (int i = 0; i < height.length; i++) {
            sum += Math.min(lMax[i], rMax[i]) - height[i];
        }
        return sum;
    }

    public int trap2(int[] height) {
        int m = 0;
        int max = height[m];
        for (int i = 1; i < height.length; i++) {
            if (height[i] > max) {
                max = height[i];
                m = i;
            }
        }

        int sum = 0;
        int l = 0;
        for (int i = 1; i < m; i++) {
            if (height[i] < height[l]) {
                sum += height[l] - height[i];
            }else{
                l = i;
            }
        }

        int r = height.length - 1;
        for (int i = height.length - 2; i > m; i--) {
            if (height[i] < height[r]) {
                sum += height[r] - height[i];
            }else{
                r = i;
            }
        }
        return sum;
    }

    public int trap(int[] height) {
        int l = 0;
        int r = height.length - 1;
        int lMax = height[l];
        int rMax = height[r];
        int sum = 0;
        while(l < r){
            if(lMax < rMax){
                l++;
                lMax = Math.max(lMax, height[l]);
                sum += lMax - height[l];
            }else{
                r--;
                rMax = Math.max(rMax, height[r]);
                sum += rMax - height[r];
            }
        }
        return sum;
    }
}
// @lc code=end
