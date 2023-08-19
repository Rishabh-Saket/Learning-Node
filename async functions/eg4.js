function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed task");
    },3000);
    for(let i=0;i<3;i++)
    {

    }
    console.log("End");
}
process();
console.log("Whatever");