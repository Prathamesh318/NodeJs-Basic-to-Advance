const EventEmitter=require("node:events");
class MyEmitter extends EventEmitter{}

const myEMitter=new MyEmitter();

myEMitter.on("event",function(a,b){//addListener  is almost same
    console.log("An event occured","a=",a,"b=",b);
})

myEMitter.emit("event",1,2)


myEMitter.on('error',(err)=>{
    console.log("There wasss an erro"+err);
})
myEMitter.emit('error',new Error('WHoops'));
