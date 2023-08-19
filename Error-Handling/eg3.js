function demo(){
    return new Promise(function(resolve,reject){
        console.log("Entered in promise");
        setTimeout(function exec(){
            console.log("Task completed");
            reject({err: "error"});
        },4000);
        console.log("Bye Bye");
    });
}
let y=demo();
y.then(function success(value){
    console.log("value is:",value);
},function err(err){
    console.log("errror is:",err);
});