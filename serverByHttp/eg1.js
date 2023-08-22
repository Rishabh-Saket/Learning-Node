
const http=require('http');
const port=3000;

const server=http.createServer(function (request,response){
    response.end("Welcome to the hidden leaf village dattebayyo"); 
});

server.listen(port,function (){
    console.log(`server is ready to listen on port ${port}`);
});