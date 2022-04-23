# 第 5 章 数值和位操作

## [136] 只出现一次的数字

除了某个数字外，其余数字都出现两次。hash 法一定可解，但没这个必要。
**比特运算**
`异或`操作本身就满足交换律，天然适合解这个问题。

```js
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
```

如果其他元素都出现 3 次呢？上面的方法显然就不可用了，假设这些数字最大 32 位，当我们把这些数字的所有位对齐，累加起来，如果某位累加的结果不是 3 的倍数，说明那个特殊数字在该为位上是 1，否则是 0（通过十进制累加做这道题也是可行的，要看题意给的数字范围怎么表示方便，二进制肯定更快）。

```js
var singleNum = function (nums) {
  let arr = new Array(32);
  for (let num of nums) {
    for (let i = 0; i < 32; i++) {
      arr[i] += (num >> (31 - i)) & 1; // n&1 获取二进制最低位
    }
  }
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (arr[i] % 3); // n<<1+next二进制转十进制
  }
  return res;
};
```

> 显然无论出现几次都能用这个方法。

## [169] 多数元素

找出给定数组中出现次数`超出一半的元素。
最先想到的是 hash 法，hash 是通用的，但题目限制为找出过半的元素，可以使用摩尔投票法：

```js
var majorityElement = function (nums) {
  let vote = null;
  let num = 1;
  for (let ticket of nums) {
    if (ticket == vote) {
      num++;
    } else {
      num--;
      if (num == 0) {
        vote = ticket;
        num++;
      }
    }
  }
  return vote;
};
```

> 劳资就是票多，一个人干你们所有。

## [172] 阶乘后的零

乘法运算中，末尾的零是由`2x5`贡献的，而 2 的数量显然要多余 5，因数最终能分解出的 5 的数量就是结果中末尾 0 的数量。
且所有能分解出 5 的数中，分解出 5 的数量随指数倍递增：

```js
var trailingZeroes = function (n) {
  let count = 0;
  while (n >= 5) {
    let temp = Math.floor(n / 5);
    count += temp;
    n = temp;
  }
  return count;
};
```

## [191] 位 1 的个数

判断整数 n 的二进制格式中 1 的个数。通过位运算`i&(i-1)`每次消去最右侧的 1，直到变为 0 时的次数。为什么可以呢？
因为如果该数字最末尾是 1 时，-1 恰好消去末尾 1，与原数做与运算也不影响结果。
如果末尾是 0，无论是几个零，-1 后总可以把最右侧的 1 变成 0，同时所有右侧的 0 都变为 1，同时再与原数做与运算，所有刚变成的 1 又会被重置为零。

```js
var hammingWeight = function (n) {
  let ans = 0;
  while (n) {
    n &= n - 1;
    ans++;
  }
  return ans;
};
```

这道题还能变形一下，如果要求所有不大于 n 的整数的二进制中的 1 呢？当前方法仍然可用，但复杂度显然要高于`O(n)`了，使用动态规划能保证复杂度为`O(n)`：

```js
var countBits(n){
  let arr = [0];
  let sum = 0;
  for(let i = 1; i<=n; i++){
    arr[i] = arr[i>>1] + i&1;
    sum+=arr[i];
  }
  return sum;
}
```

因为对于任一偶数 i，它和 i/2 中 1 的数量一样，对于奇数 i，它比 i/2 中 1 的数量多 1。
