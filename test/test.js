var findContentChildren = function (g, s) {
  g=g.sort((a, b) => a < b);
  s=s.sort((a, b) => a < b);
  let ret = 0;
  for (let i = 0, j = 0; i < g.length && j < s.length; ) {
    if (g[i] <= s[j]) {
      i++;
      j++;
      ret++;
      continue;
    }
    j++;
  }
  return ret;
};

findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]);
