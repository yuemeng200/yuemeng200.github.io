# 第 1 章 链表

> 不用`递归`和`双指针`你就输了。

## 21 合并两个有序链表

这是个头递归问题，因为每次比较后得到的较小的那个节点并不知道该指向谁，即当前递归的操作本身依赖于下次递归执行的结果。当然不使用递归也能解决，自己去构造新的链表出来。当你觉得问题简单，但操作起来比较棘手时，很可能递归就是最好的方案。

```js
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
```

## 206 反转链表

### 递归解法

对于任一节点，只需要考虑把它的 next 指向它的前一个元素，其他的不用它管。于是递归函数需要传递的是当前节点以及它的 next 应该指向的节点。这个递归本质上是个尾递归，不算难理解。递归就不应该想太多。
考虑好以下三点直接开写：

- 出口是什么？
- 每一次递归应该处理什么？
- 每次递归需要什么？

```js
var reverseList = function (head, p = null) {
  if (!head) return head;
  const next = head.next;
  head.next = p;
  return next ? reverseList(next, head) : head;
};
```

### 双指针解法

所有链表问题都能用指针来解，且理解起来比递归更直观。
不停地换指针，处理好边界条件即可。

```js
var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur) {
    let next = cur.next;
    cur.nextt = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
```
