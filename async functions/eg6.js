function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed task 1");
    },1000);
    setTimeout(function exec(){
        console.log("Executed task 2");
    },1000);
    for(let i=0;i<3;i++)
    {

    }
    console.log("End");
}
process();
console.log("Whatever");