const {sum,sub,mul,div} = require("./1");
const path = require("path")

const a = 10;const b =12
console.log(sum(a,b))
console.log(sub(a,b))
console.log(mul(a,b))
console.log(div(a,b))


console.log(process.cwd())
console.log(path.join(process.cwd(),".","assets"))