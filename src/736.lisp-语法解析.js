/*
 * @lc app=leetcode.cn id=736 lang=javascript
 *
 * [736] Lisp 语法解析
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number}
 */
var evaluate = function (expression) {
  const scope = new Map();
  let start = 0;

  const innerEvaluate = (expression) => {
    if (expression[start] !== '(') { // 非f表达式，可能为：整数或变量
      if (isLowerCase(expression[start])) {
        const v = parseVar(expression); // 变量
        const n = scope.get(v).length;
        return scope.get(v)[n - 1];
      } else { // 整数
        return parseInt(expression);
      }
    }
    let ret;
    start++; // 移除左括号
    if (expression[start] === 'l') { // "let" 表达式
      start += 4; // 移除 "let "
      const vars = [];
      while (true) {
        if (!isLowerCase(expression[start])) {
          ret = innerEvaluate(expression); // let 表达式的最后一个 expr 表达式的值
          break;
        }
        const v = parseVar(expression);
        if (expression[start] === ')') {
          const n = scope.get(v).length;
          ret = scope.get(v)[n - 1]; // let 表达式的最后一个 expr 表达式的值
          break;
        }
        vars.push(v);
        start++; // 移除空格
        const e = innerEvaluate(expression);
        if (!scope.has(v)) {
          scope.set(v, []);
        }
        scope.get(v).push(e);
        start++; // 移除空格
      }
      for (const v of vars) {
        scope.get(v).pop(); // 清除当前作用域的变量
      }
    } else if (expression[start] === 'a') { // "add" 表达式
      start += 4; // 移除 "add "
      const e1 = innerEvaluate(expression);
      start++; // 移除空格
      const e2 = innerEvaluate(expression);
      ret = e1 + e2;
    } else { // "mult" 表达式
      start += 5; // 移除 "mult "
      const e1 = innerEvaluate(expression);
      start++; // 移除空格
      const e2 = innerEvaluate(expression);
      ret = e1 * e2;
    }
    start++; // 移除右括号
    return ret;
  }

  const parseInt = (expression) => { // 解析整数
    const n = expression.length;
    let ret = 0, sign = 1;
    if (expression[start] === '-') {
      sign = -1;
      start++;
    }
    while (start < n && isDigit(expression[start])) {
      ret = ret * 10 + (expression.charAt(start) - '0');
      start++;
    }
    return sign * ret;
  }

  const parseVar = (expression) => { // 解析变量
    const n = expression.length;
    let ret = '';
    while (start < n && expression[start] !== ' ' && expression[start] !== ')') {
      ret += expression[start];
      start++;
    }
    return ret;
  }

  return innerEvaluate(expression, start);
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
}

const isLowerCase = (ch) => {
  return ch >= 'a' && ch <= 'z';
}
// @lc code=end

