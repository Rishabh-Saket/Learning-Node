
console.log("Start of file");
setTimeout(function timer1(){
    console.log("Timer 1 done");
    let y=Promise.resolve("Immediately resolved promise");
    y.then(function (value){
        console.log("Whose Promise",value);
    })
},0);

setTimeout(function timer2(){
    console.log("Timer 2 done");
},0);

let x=Promise.resolve("Saket's Promise");
x.then(function process(value){
    console.log("Whose promise?",value);
});
console.log("End of the file");