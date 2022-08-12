/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const stack = []; // {idx, 开始运行的时间}
    const res = new Array(n).fill(0);
    for (const log of logs) {
        const idx = parseInt(log.substring(0, log.indexOf(':')));
        const type = log.substring(log.indexOf(':') + 1, log.lastIndexOf(':'));
        const timestamp = parseInt(log.substring(log.lastIndexOf(':') + 1));
        if ("start" === type) {
            if (stack.length) {
                res[stack[stack.length - 1][0]] += timestamp - stack[stack.length - 1][1];
                stack[stack.length - 1][1] = timestamp;
            }
            stack.push([idx, timestamp]);
        } else {
            const t = stack.pop();
            res[t[0]] += timestamp - t[1] + 1;
            if (stack.length) {
                stack[stack.length - 1][1] = timestamp + 1;
            }
        }
    }
    return res;
};


// @lc code=end


const main = () => {
    console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]));
}
main();
