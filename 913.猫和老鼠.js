/*
 * @lc app=leetcode.cn id=913 lang=javascript
 *
 * [913] 猫和老鼠
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number}
 */
const MOUSE_WIN = 1;  // 鼠鼠胜利
const CAT_WIN = 2;    // 猫猫胜利
const DRAW = 0;       // 和

var catMouseGame = function (graph) {
  this.n = graph.length;
  this.graph = graph;
  this.dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n * 2).fill(-1)));
  return getResult(1, 2, 0);
};

const getResult = (mouse, cat, turns) => {
  if (turns === n * 2) {
    return DRAW;
  }
  if (dp[mouse][cat][turns] < 0) {
    if (mouse === 0) {
      // 鼠进洞，鼠必胜
      dp[mouse][cat][turns] = MOUSE_WIN;
    } else if (cat === mouse) {
      // 猫和鼠在同一位置，猫必胜
      dp[mouse][cat][turns] = CAT_WIN;
    } else {
      getNextResult(mouse, cat, turns);
    }
  }
  return dp[mouse][cat][turns];
}

const getNextResult = (mouse, cat, turns) => {
  // 轮到谁走，偶数轮老鼠走，奇数轮猫走， curMove是当前移动的起点
  const curMove = turns % 2 === 0 ? mouse : cat;
  const defaultResult = curMove == mouse ? CAT_WIN : MOUSE_WIN;
  let result = defaultResult;
  const nextNodes = graph[curMove];
  for (const next of nextNodes) {
    // 猫不能进洞
    if (curMove === cat && next === 0) {
      continue;
    }
    // 获取下一步的结果
    const nextMouse = curMove == mouse ? next : mouse;
    const nextCat = curMove == cat ? next : cat;
    const nextResult = getResult(nextMouse, nextCat, turns + 1);
    // 如果当前方下一句结果为必负，不做处理，一直循环。如果所有的下一步都为必负，则当前方此步状态必负
    // 直到下一步结果为必胜或者必和。必胜直接返回。必和还需要循环判断，才是只有所有状态都是非必胜状态时，此步状态必和
    if (nextResult !== defaultResult) {
      // 当前方下一步结果为必胜或者必和
      result = nextResult;
      // 下一步结果状态不是必和状态，即必胜状态。直接给dp赋值：当前步为必胜
      if (result !== DRAW) {
        break;
      }
    }
  }
  dp[mouse][cat][turns] = result;
}

// @lc code=end

const main = () => {
  const graph = [
    [2, 5],
    [3],
    [0, 4, 5],
    [1, 4, 5],
    [2, 3],
    [0, 2, 3],
  ];
  const result = catMouseGame(graph);
  console.log(result);
}
main();

