/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 *
 * https://leetcode-cn.com/problems/all-oone-data-structure/description/
 *
 * algorithms
 * Hard (38.50%)
 * Likes:    207
 * Dislikes: 0
 * Total Accepted:    15.8K
 * Total Submissions: 35.8K
 * Testcase Example:  '["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"]\n' +
  '[[],["hello"],["hello"],[],[],["leet"],[],[]]'
 *
 * 请你设计一个用于存储字符串计数的数据结构，并能够返回计数最小和最大的字符串。
 * 
 * 实现 AllOne 类：
 * 
 * 
 * AllOne() 初始化数据结构的对象。
 * inc(String key) 字符串 key 的计数增加 1 。如果数据结构中尚不存在 key ，那么插入计数为 1 的 key 。
 * dec(String key) 字符串 key 的计数减少 1 。如果 key 的计数在减少后为 0 ，那么需要将这个 key
 * 从数据结构中删除。测试用例保证：在减少计数前，key 存在于数据结构中。
 * getMaxKey() 返回任意一个计数最大的字符串。如果没有元素存在，返回一个空字符串 "" 。
 * getMinKey() 返回任意一个计数最小的字符串。如果没有元素存在，返回一个空字符串 "" 。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey",
 * "getMinKey"]
 * [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
 * 输出
 * [null, null, null, "hello", "hello", null, "hello", "leet"]
 * 
 * 解释
 * AllOne allOne = new AllOne();
 * allOne.inc("hello");
 * allOne.inc("hello");
 * allOne.getMaxKey(); // 返回 "hello"
 * allOne.getMinKey(); // 返回 "hello"
 * allOne.inc("leet");
 * allOne.getMaxKey(); // 返回 "hello"
 * allOne.getMinKey(); // 返回 "leet"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= key.length <= 10
 * key 由小写英文字母组成
 * 测试用例保证：在每次调用 dec 时，数据结构中总存在 key
 * 最多调用 inc、dec、getMaxKey 和 getMinKey 方法 5 * 10^4 次
 * 
 * 
 */

// @lc code=start

var AllOne = function () {
  this.root = new Node();
  this.root.prev = this.root;
  this.root.next = this.root;
  this.nodes = new Map();
};

AllOne.prototype.inc = function (key) {
  if (this.nodes.has(key)) {
    const cur = this.nodes.get(key);
    const nxt = cur.next;
    if (nxt === this.root || nxt.cnt > cur.cnt + 1) {
      this.nodes.set(key, cur.insert(new Node(key, cur.cnt + 1)));
    } else {
      nxt.keys.add(key);
      this.nodes.set(key, nxt);
    }
    cur.keys.delete(key);
    if (cur.keys.size === 0) {
      cur.remove();
    }
  } else {  // key 不在链表中
    if (this.root.next === this.root || this.root.next.cnt > 1) {
      this.nodes.set(key, this.root.insert(new Node(key, 1)));
    } else {
      this.root.next.keys.add(key);
      this.nodes.set(key, this.root.next);
    }
  }
};


AllOne.prototype.dec = function (key) {
  const cur = this.nodes.get(key);
  if (cur.cnt === 1) {
    // cur.remove();
    this.nodes.delete(key)
  } else { 
    const pre = cur.prev;
    if (pre === this.root || pre.cnt < cur.cnt - 1) {
      this.nodes.set(key, pre.insert(new Node(key, cur.cnt - 1)));
    } else { 
      pre.keys.add(key);
      this.nodes.set(key, pre);
    }
  }
  cur.keys.delete(key, this.root);
  if (cur.keys.size == 0) {
    cur.remove();
  }
};

AllOne.prototype.getMaxKey = function () {
  if (!this.root.prev) {
    return "";
  }
  let maxKey = "";
  for (const key of this.root.prev.keys) {
    maxKey = key;
    break;
  }
  return maxKey;
};

AllOne.prototype.getMinKey = function () {
  if (!this.root.next) {
    return "";
  }
  let minKey = "";
  for (const key of this.root.next.keys) {
    minKey = key;
    break;
  }
  return minKey;
};


class Node {
  constructor(key, cnt) {
    this.cnt = cnt ? cnt : 0;
    this.keys = new Set();
    this.keys.add(key ? key : '');
  }

  insert(node) { 
    node.prev = this;
    node.next = this.next;
    node.prev.next = node;
    node.next.prev = node;
    return node;
  }

  remove() { 
    this.prev.next = this.next;
    this.next.prev = this.prev;
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end
const main = () => {
  const allOne = new AllOne();
  allOne.inc('hello');
  allOne.inc('hello');
  console.log(allOne.getMaxKey());
  console.log(allOne.getMinKey());
  allOne.inc('leet');
  console.log(allOne.getMaxKey());
  console.log(allOne.getMinKey());
}
main()
