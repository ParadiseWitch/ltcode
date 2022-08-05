/*
 * @lc app=leetcode.cn id=1408 lang=javascript
 *
 * [1408] 数组中的字符串匹配
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const w =words.join(',');
    const ret = words.filter(item => {
        const reg = new RegExp(item, 'g')
        return w.match(reg).length >=2
    })
    return [...new Set(ret)]
};
// @lc code=end


const main = () => {
    console.log(stringMatching(["leetcode", "et", "code"]));
    console.log(stringMatching(["abc", "abc", "abc", "abc"]));
}

main()
