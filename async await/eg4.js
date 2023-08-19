async function fun(){
    console.log("Entered");
    let x = await 20;
    console.log("Exiting");
    return x;
}

console.log("Start");
let val=fun();
val.then(function exec(value) { 
    console.log("value is",value);
});
// console.log(val);
console.log("End");