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

## [226] 翻转二叉树

注意翻转的是所有节点的左右子节点，而不是左右子树。

```js
var invertTree = function (root) {
  function invert(tree) {
    if (tree) {
      let temp = tree.left;
      tree.left = tree.right;
      tree.right = temp;
      invert(tree.left);
      invert(tree.right);
    }
  }
  invert(root);
  return root;
};
```

## [543] 二叉树的直径

就是求二叉树任意两个节点间的最大距离。
可以发现这条最大距离的路径满足这个条件：它一定包含某个父节点以及其左右最深的子路。所有这个问题就是找到具有最深左右分支的节点，本身还是个求`depth`的问题（深度优先遍历），在求 depth 的过程顺便更新下`maxLength`。

```js
var diameterOfBinaryTree = function (root) {
  let maxLength = 0;
  let depth = function (node) {
    if (!node) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    maxLength = Math.max(maxLength, left + right + 1);
    return Math.max(left, right) + 1;
  };
  depth(root);
  return maxLength - 1;
};
```

## [617] 合并二叉树

合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
采用`深度优先`，是尾递归，每次合并对照位置的节点。

```js
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val = root1.val + root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
```
