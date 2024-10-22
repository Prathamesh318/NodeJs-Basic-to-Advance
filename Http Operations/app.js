
const http=require('http');

const server=http.createServer(
    (req,res)=>{
        if(req.url==='/about'){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write('About Page');
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.write('Home Page');
            res.end();
        }
      
    }
)

server.listen(3000,()=>{
    console.log("Server is running at port",3000);
})