const fs=require('fs');

const readStream=fs.createReadStream('data.txt','utf8');

readStream.on('data',(chunk)=>{
    console.log('New chunk received',chunk);
})


readStream.on('end',()=>{
    console.log('Finished reading file');
})


const writeStream = fs.createWriteStream('data.txt');
writeStream.write('This is a new line of text.\n');
writeStream.bytesWritten;
writeStream.end();