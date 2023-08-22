const express=require('express');
const app=express();
const PORT=3000;

app.get('/',function(request,response){
    response.send('Welcome to the ninja world');
});

app.post('/home',function(request,response){
    response.send("Welcome to home");
});

app.patch('/home',function(request,response){
    response.json({
        message: "This is a patch request",
        success: true
    })
});

app.listen(PORT,function(){
    console.log(`server is ready to listen on port ${PORT}`);
});