/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let uf = new UnionFind(grid);

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i < m - 1 && grid[i][j] == grid[i + 1][j]) {
        uf.merge(i * n + j, (i + 1) * n + j);
      }
      if (j < n - 1 && grid[i][j] == grid[i][j + 1]) {
        uf.merge(i * n + j, i * n + j + 1);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!uf.isOnEdge(i * n + j) && grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};
class UnionFind {
  constructor(grid) {
    const m = grid.length;
    const n = grid[0].length;
    this.parent = new Array(m * n).fill(0).map((_, i) => i);
    this.rank = new Array(m * n).fill(1);
    this.onEdge = this.parent.map(index => {
      const i = Math.floor(index / n);
      const j = index % n;
      return (i === 0 || i === m - 1 || j === 0 || j === n - 1);
    })
  }
  find(index) {
    if (index !== this.parent[index]) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }
  merge(a, b) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);
    if (aRoot === bRoot) {
      return;
    }
    if (this.rank[aRoot] > this.rank[bRoot]) {
      this.parent[bRoot] = aRoot;
      this.onEdge[aRoot] = this.onEdge[aRoot] || this.onEdge[bRoot];
    } else if (this.rank[aRoot] < this.rank[bRoot]) {
      this.parent[aRoot] = bRoot;
      this.onEdge[bRoot] = this.onEdge[aRoot] || this.onEdge[bRoot]
    } else {
      this.parent[bRoot] = aRoot;
      this.rank[aRoot]++;
      this.onEdge[aRoot] = this.onEdge[aRoot] || this.onEdge[bRoot];
    }
  }

  isOnEdge(index) {
    return this.onEdge[this.find(index)];
  }
}
// @lc code=end

const main = () => {

  console.log(numEnclaves(
    [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
  ));

}

main();