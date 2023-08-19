let id1=setTimeout(function execute1(){
    console.log("Task 1");
},6000);

let id2=setTimeout(function execute2(){
    console.log("Task 2");
    clearTimeout(id1);
},3000);