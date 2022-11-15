const mac = require("os")

console.log(mac.cpus().length)
console.log(mac.cpus()[0].model)
console.log(mac.version())
console.log(mac.platform())
console.log(mac.arch())
console.log(os.uptime())
