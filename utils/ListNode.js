class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  head() {
    return this;
  }
  tail() {
    let tar = this;
    while (tar.next) {
      tar = tar.next;
    }
    return tar;
  }
  length() {
    let tar = this;
    let count = 1;
    while (tar.next) {
      count++;
      tar = tar.next;
    }
    return count;
  }
  getNode(index) {
    let tar = this;
    while (tar && index--) {
      tar = tar.next;
    }
    return tar;
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
  print() {
    console.log(this.toString());
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



