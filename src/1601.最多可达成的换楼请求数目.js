/*
 * @lc app=leetcode.cn id=1601 lang=javascript
 *
 * [1601] 最多可达成的换楼请求数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const delta = new Array(n).fill(0);
  let zero = n, ans = 0, cnt = 0;
  const dfs = (requests, pos) => {
    if (pos === requests.length) {
      if (zero === n) {
        ans = Math.max(ans, cnt);
      }
      return;
    }
    
    // 不选
    dfs(requests, pos + 1);

    // 选
    let z = zero;
    const [x, y] = requests[pos];
    delta[x] === 0 && zero--;
    delta[x]--;
    delta[x] === 0 && zero++;

    delta[y] === 0 && zero--;
    delta[y]++;
    delta[y] === 0 && zero++;
    cnt++;
    dfs(requests, pos + 1);

    // 回溯
    delta[x]++;
    delta[y]--;
    cnt--;
    zero = z;
  }
  dfs(requests, 0);
  return ans;
};
// @lc code=end

