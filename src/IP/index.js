const os = require('os');
const networkInfo = os.networkInterfaces();
// console.log(networkInfo) // objeto
console.log(networkInfo.wlo1[0].address) // ip

const IP = networkInfo.wlo1[0].address

module.exports = {IP}