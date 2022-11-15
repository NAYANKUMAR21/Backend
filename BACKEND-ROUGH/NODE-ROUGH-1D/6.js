let sum = process.argv;
let r = 0
for(let i=2;i<sum.length;i++){
    r += Number(sum[i])
}

console.log(r)