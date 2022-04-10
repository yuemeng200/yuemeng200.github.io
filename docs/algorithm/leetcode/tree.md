# 第 4 章 树

> 一用`递归`比较多

## 94 二叉树中序遍历

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
