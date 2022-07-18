# 第 7 章 回溯

`回溯法`是纯暴力算法，之所以用是因为非用不可，普通的 for 循环无法描述的问题。主要针对以下问题：

- 排列组合
- 子集生成
- 切割问题
- 棋盘问题

关于回溯的特征：

- 所有回溯法都可以抽象为`树形结构`
- 回溯算法用来解决 n 重循环问题
- 回溯函数一般没有返回值
- 回溯树的深度是即原来 for 的层数，节点的宽度表示可选的状态，用 for 循环表示

## 1、组合问题

### [77] 组合

1-n 范围的 k 组合

```JavaScript
let path = []

var combine = function (n, k) {
  // n 表征树张成的宽度，startIndex逐渐收缩宽度，k表征树的深度，控制结束时机
  const combineHelper = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path])
      return
    }
    // 这里有个剪枝的过程，确保 i+(k-path.length)-1 <= n, 不然再去尝试就没，没意义了
    for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
      path.push(i)
      combineHelper(n, k, i + 1)
      path.pop()
    }
  }
  let path = []
  let result = []
  combineHelper(n, k, 1)
  return result
};
```

### [216] 组合总和

基本和上一题一样。这个是规定取值无重复，如果可以重复的话只需要改动下面循环的控制条件即可。

```js
var combinationSum3 = function (k, n) {
  let path = [],
    ret = [],
    sum = 0;
  let backtrack = (cur) => {
    if (sum === n && path.length === k) {
      ret.push([...path]);
      return;
    }
    if (sum >= n) return;
    for (let i = cur; i <= n - k + path.length + 1 && i < 10; i++) {
      path.push(i);
      sum += i;
      backtrack(i + 1);
      path.pop();
      sum -= i;
    }
  };
  backtrack(1);
  return ret;
};
```

## 2、切割问题

### [131] 分割回文串

如其他回溯问题相比，这个就是多了个回文判断条件，之前的回溯都是来者不拒的。

```js
const isPalindrome = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

var partition = function (s) {
  const res = [],
    path = [],
    len = s.length;
  backtracking(0);
  return res;
  function backtracking(i) {
    if (i >= len) {
      res.push(Array.from(path));
      return;
    }
    for (let j = i; j < len; j++) {
      if (!isPalindrome(s, i, j)) continue;
      path.push(s.slice(i, j + 1));
      backtracking(j + 1);
      path.pop();
    }
  }
};
```

## 3、子集问题

如果把 子集问题、组合问题、分割问题都抽象为一棵树的话，那么组合问题和分割问题都是收集树的叶子节点，而子集问题是找树的所有节点！
即在每一次递归都收集结果。

### [90] 子集

先来看看给定数组元素不重复时。

```js
var subsets = function (nums) {
  let result = [];
  let path = [];
  function backtracking(startIndex) {
    result.push([...path]);
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  }
  backtracking(0);
  return result;
};
```

如果要求 nums 元素可重复，则有一个去重的过程，其实只需要排序就可以很简单地跳过重复项的选取：

```js
var subsetsWithDup = function (nums) {
  let result = [];
  let path = [];
  let sortNums = nums.sort((a, b) => {
    return a - b;
  });
  function backtracing(startIndex, sortNums) {
    result.push([...path]);
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtracing(i + 1, sortNums);
      path.pop();
    }
  }
  backtracing(0, sortNums);
  return result;
};
```

### [491] 递增子序列

给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
这个题目有两个要求，分别是子序列长度最小为 2 和给定数组可能有重复元素。这个就不能像之前的题目那样去重了，因为子序列是有相对顺序的，不能事先排序。此时采用 hash 表的方式去重，注意这个 hash 表总是存储当前位置 cur 下的选择，即结点分叉的选择情况。

```js
var findSubsequences = function (nums) {
  let result = [];
  let path = [];
  function backtracing(startIndex) {
    if (path.length > 1) {
      result.push(path.slice());
    }
    let uset = [];
    for (let i = startIndex; i < nums.length; i++) {
      if (
        (path.length > 0 && nums[i] < path[path.length - 1]) ||
        uset[nums[i] + 100]
      ) {
        continue;
      }
      uset[nums[i] + 100] = true;
      path.push(nums[i]);
      backtracing(i + 1);
      path.pop();
    }
  }
  backtracing(0);
  return result;
};
```

## 4、排列问题

之前的组合类问题都需要 startIndex，下次的选择都应该是 startIndex 之后的内容，这样是可以避免选择的重复。而排列问题不怕重复，所以是需要一个 used 数组，标记已经选择的元素。

### [46] 全排列

nums 不包含重复元素

```js
var permute = function (nums) {
  const res = [],
    path = [],
    used = [];
  backtracking();
  return res;

  function backtracking() {
    if (path.length === nums.length) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true; // 同支
      backtracking();
      path.pop();
      used[i] = false;
    }
  }
};
```

### [47] 全排列 II

nums 可能包含重复元素。

```js
var permuteUnique = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let result = [];
  let path = [];

  function backtracing(used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        backtracing(used);
        path.pop();
        used[i] = false;
      }
    }
  }
  backtracing([]);
  return result;
};
```

## 5、棋盘问题

### [51] N 皇后

N 皇后我们是对于每个 row 选择 col。
本质上还是有验证的回溯。

```js
var solveNQueens = function (n) {
  function isValid(row, col, chessBoard, n) {
    // 验证列
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === "Q") {
        return false;
      }
    }
    // 验证左上对角线
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === "Q") {
        return false;
      }
    }
    // 验证右上对角线
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === "Q") {
        return false;
      }
    }
    return true;
  }
  function transformChessBoard(chessBoard) {
    let chessBoardBack = [];
    chessBoard.forEach((row) => {
      let rowStr = "";
      row.forEach((value) => {
        rowStr += value;
      });
      chessBoardBack.push(rowStr);
    });

    return chessBoardBack;
  }
  let result = [];
  function backtracing(row, chessBoard) {
    if (row === n) {
      result.push(transformChessBoard(chessBoard));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = "Q";
        backtracing(row + 1, chessBoard);
        chessBoard[row][col] = ".";
      }
    }
  }
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill("."));
  backtracing(0, chessBoard);
  return result;
};
```

## [37] 解数独

这是个二维递归

```js
var solveSudoku = function (board) {
  function isValid(row, col, val, board) {
    let len = board.length;
    // 行不能重复
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) {
        return false;
      }
    }
    // 列不能重复
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) {
        return false;
      }
    }
    // 九宫格不能重复
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) {
          return false;
        }
      }
    }
    return true;
  }

  function backTracking() {
    // 树深
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== ".") continue;
        // 树宽
        for (let val = 1; val <= 9; val++) {
          if (isValid(i, j, `${val}`, board)) {
            board[i][j] = `${val}`;
            if (backTracking()) {
              return true;
            }

            board[i][j] = `.`;
          }
        }
        return false;
      }
    }
    return true;
  }
  backTracking(board);
  return board;
};
```
