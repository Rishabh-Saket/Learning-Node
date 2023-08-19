function demo(val){
    return new Promise(function(resolve,reject){
        console.log("start");
        setTimeout(function(){
            if(val%2==0)
            {
                resolve("Even");
            }
            else
            {
                reject("Odd");
            }
            console.log("End");
        },5000);
    });
}
let y=demo(6);