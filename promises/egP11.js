function fun(){
    return new Promise(function process(resolve,reject){
        console.log("Processing");
        setTimeout(function doSomething(){
            resolve(124);
        },5000);
    });
}
let x=fun();
x.then(function exec1(value){
    console.log("inside exec1");
    console.log("value is",value);
    return 100;
}).then(function exec2(value){
    console.log("inside exec2");
    console.log("value is",value);
});