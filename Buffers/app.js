//creating buffer
const buffer=Buffer.from('hello world');
console.log(buffer);

//manipulating buffer
const buffer1=Buffer.alloc(10);

buffer.write('Prathamesh');
buffer.write('veer')

console.log(buffer.toString());