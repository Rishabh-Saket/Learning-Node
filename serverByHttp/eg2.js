const http=require('http');
const port=3000;
const server=http.createServer(function (request,response){
    console.log(request.method);
    if(request.url=='/home'){
        response.end('Welcome to home page');
    }
    else if(request.url=='/name'){
        response.end('The name of the provider is Naruto Uzumaki');
    }
    else{
        response.end('Welcome to hidden leaf');
    }
});

server.listen(port,function (){
    console.log(`server is ready to listen on port ${port}`);
});