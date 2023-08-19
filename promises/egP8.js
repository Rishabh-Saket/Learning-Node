console.log("Start of file");
setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

for(let i=0;i<10000000;i++){}
setTimeout(function timer2(){
    console.log("Timer 2 done");
},0);

let x=Promise.resolve("Saket's Promise");
x.then(function process(value){
    console.log("Whose promise?",value);
});
console.log("End of the file");