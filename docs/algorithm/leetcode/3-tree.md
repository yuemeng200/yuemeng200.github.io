# 第 3 章 树

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

## [222] 完全二叉树节点个数

两种求法。

### （1）满二叉树+递归

[参考](https://programmercarl.com/0222.%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E8%8A%82%E7%82%B9%E4%B8%AA%E6%95%B0.html#javascript)

```js
var countNodes = function (root) {
  //利用完全二叉树的特点
  if (root === null) {
    return 0;
  }
  let left = root.left;
  let right = root.right;
  let leftHeight = 0,
    rightHeight = 0;
  while (left) {
    left = left.left;
    leftHeight++;
  }
  while (right) {
    right = right.right;
    rightHeight++;
  }
  if (leftHeight == rightHeight) {
    return Math.pow(2, leftHeight + 1) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
```

### （2）二分查找+位运算

[参考](https://leetcode.cn/problems/count-complete-tree-nodes/solution/wan-quan-er-cha-shu-de-jie-dian-ge-shu-by-leetco-2/)

```js
const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
    if (!(bits & k)) {
      node = node.left;
    } else {
      node = node.right;
    }
    bits >>= 1;
  }
  return node !== null;
};

var countNodes = function (root) {
  if (root === null) {
    return 0;
  }
  let level = 0;
  let node = root;
  while (node.left !== null) {
    level++;
    node = node.left;
  }
  let low = 1 << level,
    high = (1 << (level + 1)) - 1;
  while (low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    if (exists(root, level, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return low;
};
```

## [110] 平衡二叉树

注意平衡二叉树的定义是左右子树的深度相差不超过 1，且左右子树都是平衡二叉树。
本身就是一个递归的定义。

```js
var isBalanced = function (root) {
  if (!root) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(height(root.left) - height(root.right)) <= 1
  );
};

function height(root) {
  if (!root) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}
```

## [257] 二叉树的所有路径

树结构不存在环，到任一点的路径总是确定的。

```js
var binaryTreePaths = function (root) {
  let paths = [];
  let getPaths = (node, cur) => {
    cur += node.val;
    if (!node.left && !node.right) {
      paths.push(cur);
      return;
    }
    cur += "->";
    node.left && getPaths(node.left, cur);
    node.right && getPaths(node.right, cur);
  };
  getPaths(root, "");
  return paths;
};
```

这个递归是带着回溯的过程的，path 是有状态的，但每次结束递归 path 总是回退到之前的状态，这就是回溯。

## [501] 二叉搜索树中的众数

注意这种使用指针原地操作的方案，和操作有序数组相似。

```js
var findMode = function (root) {
  // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
  let count = 0,
    maxCount = 1;
  let pre = root,
    res = [];
  // 1.确定递归函数及函数参数
  const travelTree = function (cur) {
    // 2. 确定递归终止条件
    if (cur === null) {
      return;
    }
    travelTree(cur.left);
    // 3. 单层递归逻辑
    if (pre.val === cur.val) {
      count++;
    } else {
      count = 1;
    }
    pre = cur;
    if (count === maxCount) {
      res.push(cur.val);
    }
    if (count > maxCount) {
      res = [];
      maxCount = count;
      res.push(cur.val);
    }
    travelTree(cur.right);
  };
  travelTree(root);
  return res;
};
```

## [236] 二叉树的最近公共祖先

:star:
这道题算得上最难的那种递归，头递归，且逻辑判断极其复杂。首先要明确递归函数返回值的含义，即当前节点是否是某一给定节点的祖先。

```js
var lowestCommonAncestor = function (root, p, q) {
  let ans;
  let dfs = (root, p, q) => {
    if (!root) return false;
    let leftAns = dfs(root.left, p, q);
    let rightAns = dfs(root.right, p, q);
    if (
      (leftAns && rightAns) ||
      ((root.val === p.val || root.val === q.val) && (leftAns || rightAns))
    ) {
      ans = root;
    }
    return leftAns || rightAns || root.val === p.val || root.val === q.val;
  };
  dfs(root, p, q);
  return ans;
};
```

## [450] 删除二叉搜索树中的节点

删除和搜索的整体框架是一样的，都是找。重要的就是找到 root 后怎么处理，如果 root 只有单侧节点，单侧子树直接提升 root 位置即可。如果左右子树均存在，应当用右子树直接替换 root，把左子树挪到右子树最左节点的左孩子位置。（另一种方案是把右子树的最左节点替换 root，代码实现麻烦）

```js
var deleteNode = function (root, key) {
  if (root === null) return root;
  if (root.val === key) {
    if (!root.left) return root.right;
    else if (!root.right) return root.left;
    else {
      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }
      cur.left = root.left;
      root = root.right;
      delete root;
      return root;
    }
  }
  if (root.val > key) root.left = deleteNode(root.left, key);
  if (root.val < key) root.right = deleteNode(root.right, key);
  return root;
};
```

## [669] 修剪二叉搜索树

修剪二叉搜索树到指定范围。猛一看不简单。

```js
var trimBST = function (root, low, high) {
  if (!root) return null;
  if (root.val < low) return trimBST(root.right, low, high);
  if (root.val > high) return trimBST(root.left, low, high);
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
```
