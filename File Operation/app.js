const fs=require('fs');


fs.readFile('data.txt','utf8',(err,data)=>{
    console.log("Reading data asynchornously");
    if(err){
        console.log("Error Occurred",err);
        return;
    }
    console.log('Data read :',data);
})

const data=fs.readFileSync('data.txt','utf8');

console.log("Reading data synchronously",data);


fs.writeFile('data.txt', 'Hello, World!', (err) => {
    if (err) {
        return console.error('Error:', err);
    }
    console.log('File written successfully');
});

fs.writeFileSync('data.txt', 'Hello, World! from sync');
console.log('File written successfully synchrounously');

//Order
//read sync
//write sync
//write async
//read async

fs.appendFile('data.txt', '\nThis is a new line!', (err) => {
    if (err) throw err;
    console.log('Content appended');
});

const appendedData=fs.readFileSync('data.txt','utf8');

console.log("appended data",appendedData);


fs.unlink('data.txt', (err) => {
    if (err) throw err;
    console.log('File deleted');
});
