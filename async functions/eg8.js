function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed task 1");
    },3000);
    setTimeout(function exec(){
        console.log("Executed task 2");
    },7000);
    for(let i=0;i<3;i++)
    {

    }
    console.log("End");
}
process();
setTimeout(function last(){
    console.log("Executed task 3");
},0);