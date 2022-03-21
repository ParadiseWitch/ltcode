/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 *
 * https://leetcode-cn.com/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (43.63%)
 * Likes:    512
 * Dislikes: 0
 * Total Accepted:    42.9K
 * Total Submissions: 98.3K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。
 * 
 * 实现 LFUCache 类：
 * 
 * 
 * LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
 * int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
 * void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量
 * capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用
 * 的键。
 * 
 * 
 * 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。
 * 
 * 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get",
 * "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
 * 输出：
 * [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
 * 
 * 解释：
 * // cnt(x) = 键 x 的使用计数
 * // cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
 * LFUCache lfu = new LFUCache(2);
 * lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
 * lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
 * lfu.get(1);      // 返回 1
 * ⁠                // cache=[1,2], cnt(2)=1, cnt(1)=2
 * lfu.put(3, 3);   // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
 * ⁠                // cache=[3,1], cnt(3)=1, cnt(1)=2
 * lfu.get(2);      // 返回 -1（未找到）
 * lfu.get(3);      // 返回 3
 * ⁠                // cache=[3,1], cnt(3)=2, cnt(1)=2
 * lfu.put(4, 4);   // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
 * ⁠                // cache=[4,3], cnt(4)=1, cnt(3)=2
 * lfu.get(1);      // 返回 -1（未找到）
 * lfu.get(3);      // 返回 3
 * ⁠                // cache=[3,4], cnt(4)=1, cnt(3)=3
 * lfu.get(4);      // 返回 4
 * ⁠                // cache=[3,4], cnt(4)=2, cnt(3)=3
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= capacity <= 10^4
 * 0 <= key <= 10^5
 * 0 <= value <= 10^9
 * 最多调用 2 * 10^5 次 get 和 put 方法
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.cache = new Map();
  this.freqMap = new Map();
  this.min = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  let node = this.cache.get(key);
  if (!node) return -1;
  this.updateFreq(node);
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity == 0) {
    return;
  }
  let node = this.cache.get(key);
  if (node) {
    node.value = value;
    this.updateFreq(node);
    return;
  } else {
    if (this.size === this.capacity) {
      let minFreqLinkedList = this.freqMap.get(this.min);
      this.cache.delete(minFreqLinkedList.tail.pre.key);
      minFreqLinkedList.remove(minFreqLinkedList.tail.pre);
      this.size--;
    }
    node = new Node(key, value, 1);
    this.cache.set(key, node);
    let minFreqLinkedList = this.freqMap.get(1);
    if (!minFreqLinkedList) {
      minFreqLinkedList = new DLinkNode();
      this.freqMap.set(1, minFreqLinkedList);
    }
    minFreqLinkedList.add(node);
    this.size++;
    this.min = 1;
  }
};

LFUCache.prototype.updateFreq = function (node) {
  let freq = node.freq;
  let freqList = this.freqMap.get(freq);
  freqList.remove(node);
  if (freq === this.min && freqList.head.next === freqList.tail) {
    this.min = freq + 1; 
  }
  node.freq++;
  let newFreqList = this.freqMap.get(node.freq);
  if (!newFreqList) {
    newFreqList = new DLinkNode();
    this.freqMap.set(node.freq, newFreqList);
  }
  newFreqList.add(node);
}


class Node {
  constructor(k, v, f) {
    this.key = k;
    this.value = v;
    this.freq = f;
    this.pre = null;
    this.next = null;
  }
}


class DLinkNode {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  add(node) {
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
  }

  remove(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
  }
}
/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const main = () => { 
  const lfuCache = new LFUCache(0);
  lfuCache.put(0, 0);
  console.log(lfuCache.get(0));
}

main();