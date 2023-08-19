var i=1;
let id1=setInterval(function fun(){
    console.log("task",i++);
},3000);

setTimeout(function(){
    clearTimeout(id1);
},13000);