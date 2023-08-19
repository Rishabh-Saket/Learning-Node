function fetch(url){
    return new Promise(function(resolve,reject){
        console.log("Started downloading from",url);
        setTimeout(function processDownloading(){
            let data="Dummy data";
            console.log("Download complete");
            resolve(data);
        },7000)
    });
}

async function processing(){
    console.log("Entered processsing");
    let value1=await fetch("www.mega.in");
    console.log("Mega downloading done");
    let value2=await fetch("www.duckduckgo.in");
    console.log("Brave downloading done");
    return value1+value2;   
}

console.log("Start");
setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);
console.log("After setting timer 1");
let x=processing();
x.then(function after(value){
    console.log("Finally processing promise resolve with",value);
});
setTimeout(function timer2(){
    console.log("Timer 2 done");
},1000);
setTimeout(function timer3(){
    console.log("Timer 3 done");
},0);
console.log("End");
