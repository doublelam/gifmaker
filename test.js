'use trict'
const fs = require('fs');

let gifBuffer = fs.readFileSync('./test.gif');
console.log('native',gifBuffer,'gifbuffer',gifBuffer.toLocaleString());
fs.writeFileSync('./copy.s', gifBuffer);