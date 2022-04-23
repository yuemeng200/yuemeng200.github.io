var countDigitOne = function (n) {
  let s = n.toString();
  let len = s.length;
  if (len == 1) return n > 0 ? 1 : 0;
  let prefix = Array(len),
    suffix = Array(len);
  for (let i = 0; i < len; i++) {
    prefix[i] = parseInt(s.substring(0, i));
    suffix[i] = parseInt(s.substring(i + 1));
  }
  prefix[0] = 0;
  suffix[len - 1] = 0;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    let value = parseInt(s[i]),
      next = len - i - 1;
    let temp = 0;
    temp += prefix[i] * Math.pow(10, next);
    if (value == 0) {
    } else if (value == 1) {
      temp += suffix[i] + 1;
    } else {
      temp += Math.pow(10, next);
    }
    ans += temp;
  }
  return ans;
};
countDigitOne(13);
