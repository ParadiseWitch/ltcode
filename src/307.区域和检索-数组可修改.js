/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.n = nums.length;
  this.segTree = new Array(this.n * 2);
  this.build(nums);
};

NumArray.prototype.build = function (nums) {
  let n = this.n;
  let j = 0;
  for (var i = n; i < n * 2; i++) {
    this.segTree[i] = nums[j];
    j++;
  }
  for (i = n - 1; i > 0; i--) {
    this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
  }
}

NumArray.prototype.update = function (index, val) {
  let n = this.n;
  index += n;
  this.segTree[index] = val;
  while (index > 1) {
    let left = index, right = index;
    if (index % 2 === 0) {
      right = index + 1;
    } else {
      left = index - 1;
    }
    index = Math.floor(index / 2);
    this.segTree[index] = this.segTree[left] + this.segTree[right];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  let n = this.n;
  left += n, right += n;
  let sum = 0;
  while (left <= right) {
    if (left % 2 === 1) {
      sum += this.segTree[left];
      left++;
    }
    if (right % 2 === 0) {
      sum += this.segTree[right];
      right--;
    }
    left = Math.floor(left / 2);
    right = Math.floor(right / 2);
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

const main = () => {
  const numArr = new NumArray([1, 3, 5]);
  console.log(numArr.sumRange(0, 2));
  console.log(numArr.update(1, 2));
  console.log(numArr.sumRange(0, 2));
}
main()
