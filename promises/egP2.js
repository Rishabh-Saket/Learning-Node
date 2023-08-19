function demo(){
    return new Promise(function(resolve,reject){
        console.log("Entered in promise");
        setTimeout(function exec(){
            console.log("Task completed");
            resolve("Dummy data");
        },4000);
        console.log("Bye Bye");
    });
}
let y=demo();
console.log(y);