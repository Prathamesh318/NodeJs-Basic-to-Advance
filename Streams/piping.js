const fs=require('node:fs')

const readAble=fs.createReadStream('input.txt');
const writeAble=fs.createWriteStream('output.txt');


readAble.pipe(writeAble);