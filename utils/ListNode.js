class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  toString() {
    let res = '';
    let cur = this;
    while (cur) {
      res += cur.val + '->';
      cur = cur.next;
    }
    return res + "null";
  }
  static fromArray = (...arr) => {
    if (arr.length === 0) return null;
    let node = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      node = new ListNode(arr[i], node);
    }
    return node;
  }
}

module.exports = ListNode;



