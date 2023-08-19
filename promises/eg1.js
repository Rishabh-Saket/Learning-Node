function process(inputString,fun){
    let outputString=inputString.split(',');
    for(let i=0;i<outputString.length;i++)
    {
        fun(outputString[i]);
    }
}

process("name:Saket,Designation:Software Engineer",function exec(inputString){
    let arr=inputString.split(':');
    console.log(`{ ${arr[0]} : ${arr[1]}}`);
});