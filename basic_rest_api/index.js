const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(isAuthenticated);

let blogList=[];

function isAuthenticated(request,response,next){
    console.log("Yes user is authenticated");
    next();
}

function logger(request,response,next){
    console.log("Admin is Naruto Uzumaki");
    next();
}

app.get('/blogs',function (request,response){
    response.status(200).json({
        data: blogList,
        success: true
    });
});

app.post('/blogs',logger,function (request,response){
    blogList.push({
        title: request.body.title,
        content: request.body.content,
        id: Math.floor(Math.random() *1000)
    });
    return response.status(201).json({
        success: true
    });
});

app.get('/blogs/:id', function (request,response){
    //console.log(request.params.id);
    const result=blogList.filter((blog)=> blog.id==request.params.id);
    //console.log(result);
    return response.status(201).json({
        data: result,
        success: true
    });
});

app.listen(PORT,function(){
    console.log(`server is ready to listen on port ${PORT}`);
});