let str = "abc";
let ans = [];
let res = [];
sequence(str, ans, 0);
for (let i = 0; i < res.length; i++) {
  for (let j = i; j < res.length; j++) {
    if (res[j] > res[j + 1]) {
      let he = res[j];
      res[j] = res[j + 1];
      res[j + 1] = he;
    }
  }
}

console.log(res.join(" "));
function sequence(str, ans, index) {
  if (index === str.length) {
    res.push(ans.join(""));
    return;
  }
  if (index > str.length) {
    return;
  }

  ans.push(str[index]);
  sequence(str, ans, index + 1);
  ans.pop();
  sequence(str, ans, index + 1);
}
