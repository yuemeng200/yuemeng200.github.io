# 第 4 章 树

> 和树相关的问题用`递归`比较多

## [94] 二叉树中序遍历

中序遍历左子树，遍历根节点，中序遍历右子树。

```js
var inorderTraversal = function (root) {
  let res = [];
  let func = (root) => {
    if (!root) return;
    func(root.left);
    res.push(root.val);
    func(root.right);
  };
  func(root);
  return res;
};
```

## [111] 对称二叉树

对称性是相对 root 节点而言的，每次需要找好下次要判断`isMirror`的应该是哪两个节点，之后递归判断的和这两个节点的关系，找好规律就能写了。

```js
var isSymmetric = function (root) {
  let isMirror = (t1, t2) => {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (
      t1.val == t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  };
  if (!root) return true;
  return isMirror(root.left, root.right);
};
```

## [104] 二叉树深度

二叉树的最大深度等于左子树的最大深度和右子树的最大深度中的较大值加 1。

```js
var isSymmetric = function (root) {
  let isMirror = (t1, t2) => {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    return (
      t1.val == t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t1.right, t2.left)
    );
  };
  if (!root) return true;
  return isMirror(root.left, root.right);
};
```
