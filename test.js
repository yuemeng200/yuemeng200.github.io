function func(s, k) {
  // 转化为数字数组
  let arr = s.split(" ").map((item) => {
    return parseInt(item);
  });
  // sum[i] 表示arr[0]~arr[i]之和
  let sum = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    sum.push(sum[i - 1] + arr[i]);
  }
  let res = 0;
  let last = 0;
  for(let i = 0; i< s.length;i++){
    if(sum)
  }

}
func("1 2 3", 3);
